/**
 * Returns all files from the root directory and its subdirectories recursively.
 * @param pattern A glob pattern to filter the files. This defaults to all files.
 * @param exclusions An array of glob patterns to exclude files from the result.
 */
export default function scanDir(pattern?: String, exclusions?: String[]): String[];

/**
 * Returns all .sh files from the root directory and its subdirectories recursively.
 * @param exclusions An array of glob patterns to exclude files from the result.
 */
export default function shellFiles(exclusions?: String[]): String[];

/**
 * Returns all .javascript files from the root directory and its subdirectories recursively.
 * @param exclusions An array of glob patterns to exclude files from the result.
 */
export default function jsFiles(exclusions?: String[]): String[];

/**
 * Returns all python files from the root directory and its subdirectories recursively.
 * @param exclusions An array of glob patterns to exclude files from the result.
 */
export default function pyFiles(exclusions?: String[]): String[];