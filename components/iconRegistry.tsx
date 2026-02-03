import {
  MegaphoneIcon,
  CodeBracketIcon,
  CurrencyDollarIcon,
  CpuChipIcon,
  PaintBrushIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CameraIcon,
  ChatBubbleLeftEllipsisIcon,
  ShoppingCartIcon,
  CommandLineIcon,
  SparklesIcon,
  CheckBadgeIcon,
  AcademicCapIcon,
  HeartIcon,
  HomeModernIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  ScaleIcon,
  PencilSquareIcon,
  LanguageIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'

import {
  SiInstagram,
  SiTiktok,
  SiYoutube
} from 'react-icons/si'

import { ElementType } from 'react'

export type IconName =
  | 'MegaphoneIcon'
  | 'CodeBracketIcon'
  | 'CurrencyDollarIcon'
  | 'CpuChipIcon'
  | 'PaintBrushIcon'
  | 'ChartBarIcon'
  | 'ShieldCheckIcon'
  | 'CameraIcon'
  | 'ChatBubbleLeftEllipsisIcon'
  | 'ShoppingCartIcon'
  | 'CommandLineIcon'
  | 'SparklesIcon'
  | 'CheckBadgeIcon'
  | 'AcademicCapIcon'
  | 'HeartIcon'
  | 'HomeModernIcon'
  | 'PresentationChartLineIcon'
  | 'UserGroupIcon'
  | 'ScaleIcon'
  | 'PencilSquareIcon'
  | 'LanguageIcon'
  | 'BriefcaseIcon'
  | 'InstagramIcon'
  | 'TiktokIcon'
  | 'YoutubeIcon'
  | 'BlogIcon'


export const iconRegistry: Record<string, ElementType> = {
  // Heroicons (UI / sistema)
  MegaphoneIcon,
  CodeBracketIcon,
  CurrencyDollarIcon,
  CpuChipIcon,
  PaintBrushIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CameraIcon,
  ChatBubbleLeftEllipsisIcon,
  ShoppingCartIcon,
  CommandLineIcon,
  SparklesIcon,
  CheckBadgeIcon,
  AcademicCapIcon,
  HeartIcon,
  HomeModernIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  ScaleIcon,
  PencilSquareIcon,
  LanguageIcon,
  BriefcaseIcon,

  // Brand Icons (Social)
  InstagramIcon: SiInstagram,
  TiktokIcon: SiTiktok,
  YoutubeIcon: SiYoutube,

  // Content
  BlogIcon: PencilSquareIcon
}
