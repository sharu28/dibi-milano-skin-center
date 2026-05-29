import {useState} from 'react';
import {Link, useLoaderData} from 'react-router';
import type {Route} from './+types/products.$handle';
import {
  getSelectedProductOptions,
  Analytics,
  Image,
  useOptimisticVariant,
  getProductOptions,
  getAdjacentAndFirstAvailableVariants,
  useSelectedOptionInUrlParam,
} from '@shopify/hydrogen';
import {motion, AnimatePresence} from 'motion/react';
import {ArrowLeft, ArrowRight, ChevronDown, ChevronUp, Info, MessageCircle, Sparkles} from 'lucide-react';
import {ProductPrice} from '~/components/ProductPrice';
import {ProductForm} from '~/components/ProductForm';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';

const WHATSAPP_NUMBER = '94776333505';

export const meta: Route.MetaFunction = ({data}) => {
  return [
    {title: `${data?.product.title ?? 'Product'} | DIBI Milano`},
    {rel: 'canonical', href: `/products/${data?.product.handle}`},
  ];
};

export async function loader(args: Route.LoaderArgs) {
  const criticalData = await loadCriticalData(args);
  return {...criticalData};
}

async function loadCriticalData({context, params, request}: Route.LoaderArgs) {
  const {handle} = params;
  const {storefront} = context;

  if (!handle) throw new Error('Expected product handle to be defined');

  const [{product}] = await Promise.all([
    storefront.query(PRODUCT_QUERY, {
      variables: {handle, selectedOptions: getSelectedProductOptions(request)},
    }),
  ]);

  if (!product?.id) throw new Response(null, {status: 404});

  redirectIfHandleIsLocalized(request, {handle, data: product});

  return {product};
}

function getWhatsAppHref(productName: string) {
  const message = encodeURIComponent(
    `Hi DIBI Milano Skin Center, I would like advice on ${productName}.`,
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export default function Product() {
  const {product} = useLoaderData<typeof loader>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>('description');

  const selectedVariant = useOptimisticVariant(
    product.selectedOrFirstAvailableVariant,
    getAdjacentAndFirstAvailableVariants(product),
  );

  useSelectedOptionInUrlParam(selectedVariant.selectedOptions);

  const productOptions = getProductOptions({
    ...product,
    selectedOrFirstAvailableVariant: selectedVariant,
  });

  const images = product.images?.nodes ?? [];
  const displayImage = images[selectedImage] ?? selectedVariant?.image ?? product.featuredImage;

  const toggleSection = (section: string) =>
    setExpandedSection(expandedSection === section ? null : section);

  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      <div className="bg-white border-b border-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-xs tracking-widest uppercase text-gray-500">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-gray-900">Products</Link>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-[200px]">{product.title}</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-4">
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <AnimatePresence mode="wait">
                  {displayImage ? (
                    <motion.div
                      key={selectedImage}
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      exit={{opacity: 0}}
                      transition={{duration: 0.3}}
                      className="w-full h-full"
                    >
                      <Image
                        data={displayImage}
                        aspectRatio="1/1"
                        sizes="(min-width: 1024px) 600px, 100vw"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-400 text-sm">No Image</span>
                    </div>
                  )}
                </AnimatePresence>

                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedImage((p) => (p === 0 ? images.length - 1 : p - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setSelectedImage((p) => (p === images.length - 1 ? 0 : p + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                      aria-label="Next image"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {images.map((img: typeof images[number], idx: number) => (
                    <button
                      key={img.id ?? idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`flex-shrink-0 w-20 h-20 overflow-hidden border-2 transition-colors ${
                        selectedImage === idx ? 'border-[#D4C5B9]' : 'border-transparent'
                      }`}
                      aria-label={`Show image ${idx + 1}`}
                    >
                      <Image data={img} aspectRatio="1/1" sizes="80px" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:sticky lg:top-32 lg:self-start space-y-8">
              {product.vendor && (
                <div>
                  <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#D4C5B9] uppercase">
                    {product.vendor}
                  </span>
                </div>
              )}

              <h1 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide leading-tight">
                {product.title}
              </h1>

              <div className="text-2xl font-mono text-gray-900">
                <ProductPrice
                  price={selectedVariant?.price}
                  compareAtPrice={selectedVariant?.compareAtPrice}
                />
              </div>

              {product.description && (
                <p className="text-lg font-serif italic text-gray-600">{product.description}</p>
              )}

              <ProductForm
                productOptions={productOptions}
                selectedVariant={selectedVariant}
              />

              <div>
                <a
                  href={getWhatsAppHref(product.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center py-4 border border-[#1A1A1A] text-[#1A1A1A] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#1A1A1A] hover:text-white transition-colors"
                >
                  Ask About This Product <MessageCircle className="ml-2 w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center">
                  <Info className="w-4 h-4 mr-1" />
                  Confirm suitability with your skin therapist
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto">
          {product.descriptionHtml && (
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleSection('description')}
                className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-5 h-5 text-[#D4C5B9]" />
                  <h2 className="text-sm font-semibold tracking-[0.15em] uppercase">Details</h2>
                </div>
                {expandedSection === 'description' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              <AnimatePresence>
                {expandedSection === 'description' && (
                  <motion.div
                    initial={{height: 0, opacity: 0}}
                    animate={{height: 'auto', opacity: 1}}
                    exit={{height: 0, opacity: 0}}
                    transition={{duration: 0.3}}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 md:px-8 pb-8 text-sm text-gray-700 leading-relaxed prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{__html: product.descriptionHtml}}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleSection('guidance')}
              className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Info className="w-5 h-5 text-[#D4C5B9]" />
                <h2 className="text-sm font-semibold tracking-[0.15em] uppercase">Professional Guidance</h2>
              </div>
              {expandedSection === 'guidance' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <AnimatePresence>
              {expandedSection === 'guidance' && (
                <motion.div
                  initial={{height: 0, opacity: 0}}
                  animate={{height: 'auto', opacity: 1}}
                  exit={{height: 0, opacity: 0}}
                  transition={{duration: 0.3}}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-8 space-y-4 text-sm text-gray-700 leading-relaxed">
                    <p>
                      DIBI Milano products are best chosen as part of a complete routine, especially
                      if you are using exfoliating acids, retinoids, brightening products, or
                      post-treatment home care.
                    </p>
                    <p>
                      Visit or message DIBI Milano Skin Center Colombo for guidance on where this
                      product fits in your current skincare routine.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Analytics.ProductView
        data={{
          products: [
            {
              id: product.id,
              title: product.title,
              price: selectedVariant?.price.amount || '0',
              vendor: product.vendor,
              variantId: selectedVariant?.id || '',
              variantTitle: selectedVariant?.title || '',
              quantity: 1,
            },
          ],
        }}
      />
    </div>
  );
}

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
` as const;

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    encodedVariantExistence
    encodedVariantAvailability
    featuredImage {
      id
      url
      altText
      width
      height
    }
    images(first: 10) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
    options {
      name
      optionValues {
        name
        firstSelectableVariant {
          ...ProductVariant
        }
        swatch {
          color
          image {
            previewImage {
              url
            }
          }
        }
      }
    }
    selectedOrFirstAvailableVariant(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    adjacentVariants (selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
` as const;
