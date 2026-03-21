"use client"
import React from 'react'
import { useAdmission } from '../hooks/useAdmission'

export default function CoursesList() {
    const {data, isPending} = useAdmission()
    
  return (
    <div>
      
    </div>
  )
}
