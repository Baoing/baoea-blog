import React, {ReactNode} from "react";

interface PageContainerProps {
  children?: ReactNode
}

const PageContainer = ({children}: PageContainerProps) => {
  return <div
    className="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
    <div aria-hidden="true"
         class="fixed hidden dark:md:block dark:opacity-70 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12">
      <img src="/images/docs-right.png"
           className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
           alt="docs right background" data-loaded="true"/>
    </div>
    <div aria-hidden="true" class="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0"><img
      src="/images/docs-left.png"
      className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
      alt="docs left background" data-loaded="true" /></div>
    {children}
  </div>
}

export default PageContainer