import React from 'react'
import Workflow from './workflow'
import { onGetWorkflows } from '../_actions/workflow-connections'

type Props = {}

const Workflows = async (props: Props) => {
  const workflows = await onGetWorkflows()
  return (
    <div className='relative flex flex-col gap-4 '>
        <section className='flex flex-col gap-4 m-2'>
            {workflows?.length ? workflows.map((flow) => (
              <Workflow 
              key={flow.id}
              {...flow}
              />
            ))
          : (
            <div className='mt-28 flex items-center justify-center text-muted-foreground'> No Workflows</div>
          )}   
        </section>
    </div>
  )
}

export default Workflows