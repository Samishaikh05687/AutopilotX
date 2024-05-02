"use client"
import React from 'react'
import {Button} from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useModal } from '@/providers/modal-provider'
import CustomModal from '@/components/global/custom-modal'
import Workflowform from '@/components/forms/workflow-form'


type Props = {}

const WorkflowButton = (props: Props) => {
    const {setOpen,setClose} = useModal()
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
    <Button size={'icon'} onClick={handleClick}><Plus/>
    </Button>
  )
}

export default WorkflowButton