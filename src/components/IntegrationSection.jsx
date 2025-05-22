import React from 'react'
import slackLogo from '../assets/slack.svg'
import googleDriveLogo from '../assets/googledrive.svg'
import zapierLogo from '../assets/zapier.svg'
import jiraLogo from '../assets/jira.svg'
import githubLogo from '../assets/github.svg'
import googleCalendarLogo from '../assets/googlecalendar.svg'


const IntegrationSection = () => {
    const integrations =[
        { name: 'Slack', logo: slackLogo },
        { name: 'Google Drive', logo: googleDriveLogo },
        { name: 'Zapier', logo: zapierLogo },
        { name: 'Jira', logo: jiraLogo },
        { name: 'GitHub', logo: githubLogo },
        { name: 'Google Calendar', logo: googleCalendarLogo },
    ]

  return (
    <section className='py-16 bg-gradient-to-tr from-gray-100 to-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-12'>Integrate with your <span className='text-purple-600'>favorite Tools</span></h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center'>
                {integrations.map((integration, index) => (
                    <div key={index} className='flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                        <img src={integration.logo} alt={`${integration.name} Logo`} className='w-16 h-16 object-contain mb-2'/>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default IntegrationSection