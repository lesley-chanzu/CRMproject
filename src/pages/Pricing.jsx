import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle,
    ArrowRight,
    ChevronDown,
    Info,
    CreditCard,
    Users,
    Zap,
    Briefcase,
    HelpCircle,
} from 'lucide-react';

// Pricing Data
const pricingPlans = [
    {
        title: 'Free',
        Price: '$0',
        description: 'Basic features for individuals and small teams to get started.',
        features: [
            {text: '1 User', icon: <Users size={16} />},
            {text: 'Basic Project Management', icon: <CheckCircle size={16} />},
            {text: 'Limited Storage', icon: <Briefcase size={16} />},
            {text: 'Community Support', icon: <HelpCircle size={16} />},
        ],
        buttonText: 'Get Started',
        buttonVariant: 'outline',
        mostPopular: false,
    },
    {
        title: 'Pro',
        Price: '$10/month',
        description: 'Advanced features for growing teams and businesses.',
        features: [
            {text: 'Up to 10 Users', icon: <Users size={16} />},
            {text: 'Advanced Project Management', icon: <CheckCircle size={16} />},
            {text: '100GB Storage', icon: <Briefcase size={16} />},
            {text: 'Priority Support', icon: <HelpCircle size={16} />},
        ],
        buttonText: 'Start Free Trial',
        buttonVariant: 'primary',
        mostPopular: true,
    },
    {
        title: 'Enterprise',
        Price: 'Contact Us',
        description: 'Custom solutions for large organizations.',
        features: [
            {text: 'Unlimited Users', icon: <Users size={16} />},
            {text: 'Custom Integrations', icon: <Zap size={16} />},
            {text: 'Unlimited Storage', icon: <Briefcase size={16} />},
            {text: 'Dedicated Support', icon: <HelpCircle size={16} />},
        ],
        buttonText: 'Contact Sales',
        buttonVariant: 'outline',
        mostPopular: false,
    }
];

// ==================
// Animation Variants
// ===================
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeInOut' } },
    hover: {scale: 1.03, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', transition: { duration: 0.3 }},
};

// ==================
// Accordion component for feature details
// ===================
const Accordion = ({title, children}) => {
    const [isOpen, setIsOPen] = useState(false);

    return (
        <div className='border-b border-gray-200 last:border-0'>
            <button
            onClick={() => setIsOPen(!isOpen)}
            className='flex items-center justify-between w-full py-4 text-left text-gray-700 focus:outline-none'
            aria-expanded={isOpen}
            >
                <span className='text-gray-900 font-medium'>{title}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}/>
            </button>
            <motion.div
            className='overflow-hidden'
            initial={{ height: 0 }}
            animate={{ height: isOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                {isOpen && <div className='pb-4 text-gray-700'>{children}</div>}
            </motion.div>
        </div>
    )
}

const Pricing = () => {
  return (
    <div className='container mx-auto p-6 mt-12'>
        <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900'>Choose the Perfect Plan</h1>
            <p className='text-gray-600 mt-2'>
                Upgrade your workflow with GoodDay&apos;s flexible pricing plans. Whether you are a solo user or part of a large team, we have the right plan for you.
            </p>
        </div>

        <div className='gri d grid-cols-1 md:grid-cols-3 gap-8'>
            {pricingPlans.map((plan) => (
                <motion.div
                key={plan.title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={'hover'}
                className={`bg-white rounded-xl shadow-md border border-gray-200 transition-all duration-300 ${plan.mostPopular ? 'border-purple-500' : ''}`}
                >
                    <div className='p-6'>
                        <h2 className={`text-2xl font-semibold mb-3 ${plan.mostPopular ? 'text-purple-600' :' text-gray-500'}`}>
                            {plan.title}
                            {plan.mostPopular && <span className='ml-2 px-2 rounded-full bg-purple-200 text-puprle-600 text-xs font-medium inline-block'>Most Popular</span>}
                        </h2>
                        <p className='text-xl font-bold text-gray-900 mb-4'>{plan.Price}</p>
                        <p className='text-gray-700 mb-6'>{plan.description}</p>

                        <ul>
                            {plan.features.map((feature, index) => (
                                <li key={index} className='flex items-center gap-2 text-gray-700'>
                                    {feature.icon}
                                    <span>{feature.text}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                        className={`w-full px-6 py-3 rounded-md text-lg font-semibold transition-colors duration-300
                            ${plan.buttonVariant === 'default'
                                ? 'bg-purple-600 text-white hover:bg-purple-800'
                                : plan.buttonVariant === 'outline'
                                ? 'bg-transparent text-purple-600 border border-purple-400 hover:bg-purple-100 hover:text-purple-800'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }
                            `}
                        >
                            {plan.buttonText}
                            {plan.title !== 'Enterprise' && <ArrowRight className='ml-2 w-5 h-4'/>}
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>

        <div className='mt-11'>
            <h3 className='text-2xl font-semibold mb-6 text-gray-900'>Frequently asked questions</h3>
            <div className='space-y-4'>
                <Accordion
                title='What payment methods do you accept?'>
                    <p>
                        We accept all major credit cards, PayPal, and bank transfers. For enterprise plans, we can also accommodate other payment methods.
                    </p>
                    <div className='flex items-center gap-3 mt-2'>
                        <CreditCard className='w-4 h-4'/><span>Credit Card</span>
                    </div>
                </Accordion>
                <Accordion
                title='Can I change my plan later?'>
                    <p>
                        Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the end of your current billing cycle.
                    </p>
                    <div className='flex items-center gap-2 mt-2'>
                        <CheckCircle className='w-4 h-4'/> <span>Yes</span>
                    </div>
                </Accordion>
                <Accordion
                title='Is there a discount for annual billing/subscriptions?'
                >
                    <p>
                        Yes, we offer a discount for annual subscriptions. You can save up to 20% by choosing the annual billing option.
                    </p>
                    <div className='flex items-center gap-2 mt-2' >
                        <Info className='w-4 h-4'/> <span>20% Discount</span>
                    </div>
                </Accordion>
                <Accordion
                title='How does the free trial work?'
                >
                    <p>
                        Our free trial allows you to explore all premium features for 14 days. No credit card is required, and you can cancel anytime.
                    </p>
                    <div className='flex items-center gap-2 mt-2'>
                        <CheckCircle className='w-4 h-4'/> <span>14 Days Free</span>
                    </div>
                </Accordion>
            </div>
        </div>

        <div>
            <p>
                If you have any other questions, feel free to <a href='/contact-us' className='text-purple-600 hover:underline'>contact us</a>. Our support team is here to help you!
            </p>
        </div>
    </div>
  )
}

export default Pricing