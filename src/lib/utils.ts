import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBreadcrumb(pathname: string) {
  return pathname
    .split('-') // tách bằng dấu gạch ngang
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // viết hoa từ đầu mỗi từ
    .join(' '); // nối lại bằng dấu cách
}
