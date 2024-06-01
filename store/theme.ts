import { create } from "zustand";
import { Theme } from "./themeTypes";

/**
 * Interface representing the state of the theme settings.
 */
interface ThemeSettingsState {
  /** Indicates whether the theme is active or not. */
  state: boolean;

  /** The current theme settings. */
  theme: Theme;

  /**
   * Sets the state to either active or inactive.
   * @param state - A boolean indicating the new state.
   */
  setState: (state: boolean) => void;

  /**
   * Updates the theme settings.
   * @param theme - An object representing the new theme settings.
   */
  setTheme: (theme: Theme) => void;
}

/**
 * Zustand store for managing theme settings.
 *
 * @example
 * const { state, theme, setState, setTheme } = useThemeSettings();
 *
 * // Toggle state
 * setState(!state);
 *
 * // Update theme
 * setTheme({
 *   primaryColor: '#3498db',
 *   secondaryColor: '#2ecc71',
 *   backgroundColor: '#ecf0f1',
 *   textColor: '#2c3e50',
 * });
 */
const useThemeSettings = create<ThemeSettingsState>((set) => ({
  state: false,
  theme: {
    primaryColor: "",
    secondaryColor: "",
    backgroundColor: "",
    textColor: "",
  },
  setState: (state: boolean) => set({ state }),
  setTheme: (theme: Theme) => set({ theme }),
}));

export default useThemeSettings;
