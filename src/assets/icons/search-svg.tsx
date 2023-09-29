import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="m17.26 16.07-2.84-2.82a6.6 6.6 0 0 0 .29-7.79 6.67 6.67 0 1 0-1.46 8.97l2.82 2.83a.83.83 0 0 0 1.37-.27.83.83 0 0 0-.18-.91Zm-13.1-6.9a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
