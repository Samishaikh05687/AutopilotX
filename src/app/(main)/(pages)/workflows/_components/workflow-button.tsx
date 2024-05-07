"use client"
import React from 'react'
import {Button} from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useModal } from '@/providers/modal-provider'
import CustomModal from '@/components/global/custom-modal'
import Workflowform from '@/components/forms/workflow-form'
import { useBilling } from '@/providers/billing-provider'


type Props = {}

const WorkflowButton = (props: Props) => {
    const {setOpen,setClose} = useModal()
    const {credits} = useBilling()
    const handleClick=()=>{
        setOpen(
            <CustomModal
            title="Create a Workflow Automation"
            subheading="Workflows area poerful that help yo automate tasks."
            >
                <Workflowform />
            </CustomModal>
        )
    }
  return (
    <Button size={'icon'}
    {
      ...(credits !=='0' ? {
        onClick:handleClick,
      }:
    {
      disabled :true,
    })
    }
    ><Plus/>
    </Button>
  )
}

export default WorkflowButton