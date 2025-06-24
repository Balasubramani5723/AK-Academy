import PricingCard from '../components/PricingCard'
import { FiCheck } from 'react-icons/fi'

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for beginners who want to explore',
    price: '19',
    period: 'month',
    features: [
      { name: 'Access to basic courses', available: true },
      { name: 'Community support', available: true },
      { name: 'Certificate of completion', available: false },
      { name: 'Project reviews', available: false },
      { name: 'Career resources', available: false },
    ],
    ctaText: 'Get Started',
    ctaLink: '/auth',
  },
  {
    name: 'Pro',
    description: 'For serious learners building their skills',
    price: '49',
    period: 'month',
    features: [
      { name: 'Access to all courses', available: true },
      { name: 'Community support', available: true },
      { name: 'Certificate of completion', available: true },
      { name: 'Project reviews', available: true },
      { name: 'Career resources', available: false },
    ],
    ctaText: 'Get Started',
    ctaLink: '/auth',
    featured: true,
  },
  {
    name: 'Premium',
    description: 'Complete package with career support',
    price: '99',
    period: 'month',
    features: [
      { name: 'Access to all courses', available: true },
      { name: 'Community support', available: true },
      { name: 'Certificate of completion', available: true },
      { name: 'Project reviews', available: true },
      { name: 'Career resources', available: true },
    ],
    ctaText: 'Get Started',
    ctaLink: '/auth',
  },
]

export default function Pricing() {
  return (
    <div>
      <section className="bg-gradient-to-r text-center justify-center items-center from-primary to-primary-dark text-black py-10">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing <span className='text-indigo-700'>Plans</span></h1>
          <p className="text-xl">
            Choose the plan that fits your learning goals and budget
          </p>
        </div>
      </section>

      <section className="py-7">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4"> Simple, <span className='text-indigo-700'>Transparent Pricing</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All plans include unlimited access to our course library. Upgrade or
              downgrade at any time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                plan={plan}
                featured={plan.featured}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Plan <span className='text-indigo-700'>Comparison</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our plans stack up against each other
            </p>
          </div>

          <div className="overflow-x-auto border-2 ">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className='border-2'>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left border-2">Features</th>
                  <th className="px-6 py-4 text-center border-2">Starter</th>
                  <th className="px-6 py-4 text-center border-2">Pro</th>
                  <th className="px-6 py-4 text-center border-2">Premium</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Access to basic courses',
                  'Access to all courses',
                  'Community support',
                  'Certificate of completion',
                  'Project reviews',
                  'Career resources',
                  '1-on-1 mentoring',
                ].map((feature, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-50 border-2' : ''}
                  >
                    <td className="px-6 py-4  border-2">{feature}</td>
                    <td className="px-6 py-4 text-center border-2">
                      {feature === 'Access to basic course border-2' ||
                      feature === 'Community support border-2' ? (
                        <FiCheck className="text-green-700 mx-auto border-2" />
                      ) : (
                        <span className="text-gray-700">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center border-2">
                      {feature !== '1-on-1 mentoring' ? (
                        <FiCheck className="text-green-700 mx-auto" />
                      ) : (
                        <span className="text-gray-700">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <FiCheck className="text-green-700 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently <span className='text-indigo-700'>Asked Questions</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our pricing and plans
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Can I switch plans later?',
                answer:
                  'Yes, you can upgrade or downgrade your plan at any time. Your billing will be prorated based on your current subscription.',
              },
              {
                question: 'Do you offer discounts for students?',
                answer:
                  'We offer a 30% discount for students with a valid .edu email address. Contact our support team for more information.',
              },
              {
                question: 'Is there a free trial available?',
                answer:
                  'Yes, we offer a 7-day free trial for our Pro plan. You can cancel anytime during the trial period without being charged.',
              },
              {
                question: 'What payment methods do you accept?',
                answer:
                  'We accept all major credit cards, PayPal, and in some regions, bank transfers. All payments are processed securely.',
              },
              {
                question: 'Can I cancel my subscription anytime?',
                answer:
                  'Absolutely. You can cancel your subscription at any time, and you will continue to have access until the end of your billing period.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
                  <h3 className="font-medium">{faq.question}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}