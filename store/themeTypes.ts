/**
 * Interface representing the theme settings.
 */
export interface Theme {
    /** The primary color used in the theme. */
    primaryColor: string;
  
    /** The secondary color used in the theme. */
    secondaryColor: string;
  
    /** The background color used in the theme. */
    backgroundColor: string;
  
    /** The text color used in the theme. */
    textColor: string;
  
    /** Additional theme properties. */
    [key: string]: string;
  }