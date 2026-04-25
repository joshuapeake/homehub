import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function for merging class names.
 *
 * @param {...(string|string[])} classes - A class name string or an array of class name strings.
 * @returns {string} Merged class names.
 */
export function mergeClassNames(...classes) {
    return twMerge(clsx(...classes));
}