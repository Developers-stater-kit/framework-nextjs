import React from 'react'

export const dynamic = 'force-dynamic'
export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <div>
      {children}
    </div>
  )
}
