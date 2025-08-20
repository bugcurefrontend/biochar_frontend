
'use client'

import { ReactNode } from 'react'

interface PreviewWrapperProps {
  children: ReactNode
}

export default function PreviewWrapper({ children }: PreviewWrapperProps) {
  return (
      <div className="preview-container">
        {children}
      </div>
  )
}

