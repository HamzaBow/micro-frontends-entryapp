// @ts-expect-error this is a remote component (micro-frontends)
import Service1App from 'service1/Service1App'
// @ts-expect-error this is a remote component (micro-frontends)
import Service2App from 'service2/Service2App'

const serviceNameArrayConst = ['service1', 'service2'] as const
// const serviceNameArray      = [...serviceNameArrayConst]
type ServiceName = (typeof serviceNameArrayConst)[number]

type Services = Record<ServiceName, { component: JSX.Element; title: string }>

const services: Services = {
  service1: {
    component: Service1App,
    title: 'Service 1',
  },
  service2: {
    component: Service2App,
    title: 'Service 2',
  },
}

function App() {
  const service: ServiceName = window.location.pathname.split(
    '/'
  )[1] as ServiceName
  return (
    <div className='h-full'>
      <div className='flex h-8 w-full items-center justify-between bg-slate-500 px-8 py-1'>
        <div className='flex gap-2'>
          <div className='mr-6'>Acme Corporation</div>
          {Object.keys(services).map((serviceName) => (
            <a
              key={serviceName}
              href={`/${serviceName}`}
              className={`${serviceName === service ? 'bg-indigo-600' : ''}`}
            >
              {services[serviceName as ServiceName]['title']}
            </a>
          ))}
        </div>
        <div>Account</div>
      </div>

      {Object.keys(services).map((serviceName) => {
        if (serviceName !== service) return null
        const ServiceComponent = services[serviceName as ServiceName].component
        // @ts-expect-error abcd
        return <ServiceComponent key={serviceName} />
      })}
    </div>
  )
}

export default App
