import React from 'react'

export default function SectionLayout({children}: {children: React.ReactNode}) {
  return <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">{children}</div>
}
