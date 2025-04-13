import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBreadcrumb(pathname: string) {
  return pathname
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export const camelToTitle = (camelCase: string) => {
  return camelCase
    .replace(/([A-Z])/g, ' $1') // Thêm khoảng trắng trước chữ in hoa
    .replace(/^./, (str) => str.toUpperCase()); // Viết hoa chữ cái đầu tiên
};
