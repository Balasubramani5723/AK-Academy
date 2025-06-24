import { FiCheck, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function PricingCard({ plan, featured = false }) {
  return (
    <div
      className={`rounded-lg shadow-md overflow-hidden border-2 border-indigo-700 bg-linear-to-r/srgb from-indigo-500 to-teal-400 ${
        featured ? 'border-2 border-primary transform scale-105' : 'border border-gray-200'
      }`}
    >
      {featured && (
        <div className="bg-primary text-white text-center py-1 text-2xl font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-center mb-2">{plan.name}</h3>
        <p className="text-gray-600 text-center mb-6">{plan.description}</p>
        <div className="text-center mb-6">
          <span className="text-4xl font-bold">${plan.price}</span>
          <span className="text-gray-500">/{plan.period}</span>
        </div>
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.available ? (
                <FiCheck className="text-green-500 mr-2" />
              ) : (
                <FiX className="text-red-500 mr-2" />
              )}
              <span
                className={feature.available ? 'text-gray-800' : 'text-gray-400'}
              >
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
        <Link
          to={plan.ctaLink}
          className={`btn w-full text-center ms-17 p-4 text-white rounded-full bg-black ${
            featured ? 'btn-primary' : 'btn-outline'
          }`}
        >
          {plan.ctaText}
        </Link>
      </div>
    </div>
  )
}