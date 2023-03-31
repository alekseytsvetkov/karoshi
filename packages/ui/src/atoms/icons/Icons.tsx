import {
  Play,
  Pause,
  RefreshCcw,
  Cog,
  MoreVertical,
  MoreHorizontal,
  BellRing,
  type Icon as LucideIcon,
  LucideProps,
  SunMedium,
  Moon,
  Laptop,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  play: Play,
  pause: Pause,
  reset: RefreshCcw,
  cog: Cog,
  moreVertical: MoreVertical,
  moreHorizontal: MoreHorizontal,
  bellRing: BellRing,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  discord: (props: LucideProps) => (
    <svg viewBox="0 0 24 18" {...props}>
      <path d="M19.6974 1.5075C18.1922 0.80325 16.5828 0.291433 14.9002 0C14.6935 0.373607 14.4521 0.876116 14.2856 1.27586C12.497 1.00687 10.7248 1.00687 8.96899 1.27586C8.80257 0.876116 8.55566 0.373607 8.34717 0C6.66273 0.291433 5.05145 0.80513 3.54625 1.51123C0.510249 6.09902 -0.312762 10.5729 0.098744 14.9832C2.11238 16.4869 4.06384 17.4004 5.98236 17.9981C6.45606 17.3462 6.87853 16.6532 7.24248 15.9228C6.54932 15.6594 5.88543 15.3344 5.25813 14.9571C5.42455 14.8338 5.58734 14.7049 5.74461 14.5722C9.57069 16.3618 13.7278 16.3618 17.5082 14.5722C17.6673 14.7049 17.8301 14.8338 17.9947 14.9571C17.3655 15.3362 16.6998 15.6613 16.0067 15.9247C16.3706 16.6532 16.7913 17.3481 17.2668 18C19.1872 17.4022 21.1404 16.4888 23.1541 14.9832C23.6369 9.87051 22.3292 5.43775 19.6974 1.5075ZM7.76373 12.2709C6.61518 12.2709 5.67327 11.1986 5.67327 9.89291C5.67327 8.58719 6.59506 7.5131 7.76373 7.5131C8.93243 7.5131 9.8743 8.58531 9.85419 9.89291C9.856 11.1986 8.93243 12.2709 7.76373 12.2709ZM15.4891 12.2709C14.3405 12.2709 13.3986 11.1986 13.3986 9.89291C13.3986 8.58719 14.3204 7.5131 15.4891 7.5131C16.6577 7.5131 17.5997 8.58531 17.5795 9.89291C17.5795 11.1986 16.6577 12.2709 15.4891 12.2709Z" fill="currentColor" />
    </svg>
  ),
  logo: (props: LucideProps) => (
    <svg viewBox="0 0 32 27" {...props}>
      <path d="M30.7833 16.4624C28.0737 24.0499 22.6853 25.9789 17.7982 26.3648L17.7237 26.3699C16.5077 26.4522 15.2865 26.4496 14.0705 26.3648C10.0859 25.9789 3.87068 24.0499 1.16106 16.4624C0.551786 14.752 -0.371829 10.3353 0.157754 6.74985C0.584505 3.86404 2.86782 2.24524 5.90392 1.21385C7.33657 0.72717 10.3428 0.0579834 15.9977 0.0579834C21.7439 0.118818 23.8112 0.56375 25.6354 1.18343C28.6715 2.21482 31.35 3.71195 31.7768 6.59776C32.3064 10.1832 31.3951 14.752 30.7833 16.4624Z" fill="transparent" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17.7982 26.3648C22.6853 25.9789 28.0737 24.0499 30.7833 16.4624C31.3951 14.752 32.3064 10.1832 31.7768 6.59776C31.35 3.71195 28.6715 2.21482 25.6354 1.18343C23.8112 0.56375 21.7439 0.118818 15.9977 0.0579834C10.3428 0.0579834 7.33657 0.72717 5.90392 1.21385C2.86782 2.24524 0.584505 3.86404 0.157754 6.74985C-0.371829 10.3353 0.551786 14.752 1.16106 16.4624C3.87068 24.0499 10.0859 25.9789 14.0705 26.3648C15.2865 26.4496 16.5077 26.4522 17.7237 26.3699L17.7982 26.3648ZM26.6777 7.54113C26.6777 9.10367 21.8436 10.3704 15.8804 10.3704C9.91716 10.3704 5.08307 9.10367 5.08307 7.54113C5.08307 5.97859 9.91716 4.7119 15.8804 4.7119C21.8436 4.7119 26.6777 5.97859 26.6777 7.54113ZM10.5141 16.3703C10.5141 17.3234 9.74182 18.0961 8.78913 18.0961C7.83644 18.0961 7.06412 17.3234 7.06412 16.3703C7.06412 15.4172 7.83644 14.6445 8.78913 14.6445C9.74182 14.6445 10.5141 15.4172 10.5141 16.3703ZM24.8069 16.3703C24.8069 17.3234 24.0346 18.0961 23.0819 18.0961C22.1292 18.0961 21.3569 17.3234 21.3569 16.3703C21.3569 15.4172 22.1292 14.6445 23.0819 14.6445C24.0346 14.6445 24.8069 15.4172 24.8069 16.3703ZM14.028 19.9394C14.6144 20.013 15.275 20.0684 15.9355 20.0684C16.596 20.0684 17.2565 20.013 17.8429 19.9394C18.5884 19.8459 19.0028 20.5742 18.3462 20.9394C17.736 21.2786 16.9365 21.5477 15.9355 21.5477C14.9344 21.5477 14.135 21.2786 13.5247 20.9394C12.8681 20.5742 13.2825 19.8459 14.028 19.9394Z" fill="currentColor" />
    </svg>
  ),
  apple: (props: LucideProps) => (
    <svg viewBox="0 0 12 14" {...props}>
      <path d="M9.5205 7.43776C9.54018 9.5564 11.3791 10.2614 11.3995 10.2704C11.3839 10.3202 11.1057 11.2752 10.4306 12.2616C9.84713 13.1145 9.24152 13.9642 8.28751 13.9818C7.35009 13.9991 7.04866 13.4259 5.97692 13.4259C4.90552 13.4259 4.57061 13.9642 3.68324 13.9991C2.76237 14.0339 2.06114 13.0768 1.47278 12.2271C0.270528 10.489 -0.64824 7.31554 0.585433 5.17343C1.1983 4.10964 2.29353 3.43601 3.4823 3.41874C4.38657 3.40149 5.2401 4.0271 5.79289 4.0271C6.34533 4.0271 7.38254 3.27475 8.47292 3.38524C8.92939 3.40424 10.2107 3.56963 11.0335 4.77395C10.9672 4.81505 9.50461 5.66649 9.5205 7.43776ZM7.75874 2.23531C8.24763 1.64352 8.57669 0.819699 8.48692 0C7.78221 0.0283228 6.93007 0.469596 6.4246 1.06106C5.9716 1.58483 5.57487 2.42315 5.68192 3.22662C6.46739 3.28739 7.26982 2.82747 7.75874 2.23531Z" fill="currentFill"/>
    </svg>
  ),
}