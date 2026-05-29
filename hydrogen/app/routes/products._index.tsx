import type {Route} from './+types/products._index';
import {Link, useLoaderData} from 'react-router';
import {getPaginationVariables, Image, Money, Pagination} from '@shopify/hydrogen';
import {motion} from 'motion/react';
import {ArrowRight, Sparkles} from 'lucide-react';

const WHATSAPP_NUMBER = '94776333505';

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'Products | DIBI Milano Skin Center'},
    {
      name: 'description',
      content:
        'Discover our curated collection of advanced skincare formulations, designed to transform your skin with science-backed ingredients.',
    },
  ];
};

export async function loader({context, request}: Route.LoaderArgs) {
  const paginationVariables = getPaginationVariables(request, {pageBy: 12});
  const {products} = await context.storefront.query(PRODUCTS_QUERY, {
    variables: {...paginationVariables},
  });
  return {products};
}

function getWhatsAppHref() {
  const message = encodeURIComponent(
    'Hi DIBI Milano Skin Center, I would like help choosing DIBI Milano products.',
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export default function Products() {
  const {products} = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2000&auto=format&fit=crop"
            alt="Products Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="text-xs font-semibold tracking-[0.3em] text-[#D4C5B9] uppercase mb-4"
          >
            Professional Skincare
          </motion.p>
          <motion.h1
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.1}}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-[0.15em] uppercase mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            className="text-lg text-white/80 font-serif italic max-w-2xl mx-auto"
          >
            Discover our curated collection of advanced skincare formulations, designed to
            transform your skin with science-backed ingredients.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#D4C5B9]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#D4C5B9] uppercase">
              DIBI Milano Products
            </span>
          </div>
          <p className="text-xl md:text-2xl font-serif text-gray-700 leading-relaxed">
            Explore DIBI Milano professional skincare products available through DIBI Milano Skin
            Center Colombo. Browse the collection, then speak with our team to choose products that
            fit your skin and routine.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.nodes.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-lg font-serif text-gray-600 max-w-xl mx-auto">
                No products available yet. Please check back soon, or message our team for
                recommendations.
              </p>
            </div>
          ) : (
            <Pagination connection={products}>
              {({nodes, NextLink, PreviousLink, hasNextPage, hasPreviousPage}) => (
                <>
                  {hasPreviousPage && (
                    <div className="text-center mb-8">
                      <PreviousLink className="inline-flex items-center px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase text-gray-900 border border-gray-300 hover:border-[#D4C5B9] hover:text-[#D4C5B9] transition-colors">
                        Load previous
                      </PreviousLink>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nodes.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: Math.min(index * 0.05, 0.4)}}
                      >
                        <Link
                          to={`/products/${product.handle}`}
                          prefetch="intent"
                          className="group block bg-white"
                        >
                          <div className="relative aspect-square overflow-hidden bg-gray-100">
                            {product.featuredImage ? (
                              <Image
                                data={product.featuredImage}
                                aspectRatio="1/1"
                                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading={index < 6 ? 'eager' : 'lazy'}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                <span className="text-gray-400 text-sm">No Image</span>
                              </div>
                            )}

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="px-6 py-3 bg-white text-gray-900 text-xs font-semibold tracking-[0.15em] uppercase">
                                View Product
                              </span>
                            </div>
                          </div>

                          <div className="p-6">
                            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#D4C5B9] uppercase mb-2">
                              {product.vendor || 'DIBI Milano'}
                            </p>
                            <h3 className="text-sm font-medium text-gray-900 tracking-wide leading-snug line-clamp-2 min-h-[2.5rem]">
                              {product.title}
                            </h3>
                            <p className="mt-2 text-sm font-mono text-gray-900">
                              <Money data={product.priceRange.minVariantPrice} />
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {hasNextPage && (
                    <div className="text-center mt-16">
                      <NextLink className="inline-flex items-center px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase text-gray-900 border border-gray-300 hover:border-[#D4C5B9] hover:text-[#D4C5B9] transition-colors">
                        Load more
                      </NextLink>
                    </div>
                  )}
                </>
              )}
            </Pagination>
          )}
        </div>
      </section>

      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-5 h-5 text-[#D4C5B9]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#D4C5B9] uppercase">
              Expert Recommendation
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-white tracking-[0.1em] uppercase mb-6">
            Need Help Choosing?
          </h2>

          <p className="text-lg text-white/70 font-serif italic mb-10 max-w-2xl mx-auto">
            Message our skin team for guidance before adding new products to your routine.
          </p>

          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D4C5B9] transition-all duration-300"
          >
            Ask on WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

const PRODUCT_LIST_ITEM = `#graphql
  fragment ProductListItem on Product {
    id
    handle
    title
    vendor
    productType
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
  }
` as const;

const PRODUCTS_QUERY = `#graphql
  query ProductsList(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      nodes {
        ...ProductListItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  ${PRODUCT_LIST_ITEM}
` as const;
