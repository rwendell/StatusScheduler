/**
 * @name StatusScheduler
 * @description Schedule your discord status on a daily/weekly basis
 * @version 0.0.1
 * @Author RyGuy#8931
 *
 * @source https://github.com/rwendell/StatusScheduler
 */

import SettingsPanel from "./SettingsPanel";

class HelloWorld {
  /**
   * @name load
   * Called when the plugin is loaded regardless of if it is enabled or disabled.
   */
  load() {}

  /**
   * @name start
   * Called when the plugin is enabled or when it is loaded and was previously
   * reloaded (such as discord start or reload).
   */
  start() {}

  /**
   * @name stop
   * Called when the plugin is disabled.
   */
  stop() {}

  /**
   * @name observer
   * Called on every mutation that occurs on the document.
   * For more information on observers and mutations take a look at MDN's documentation.
   * https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
   *
   * @param {MutationObserver} changes - The mutation that occurred.
   */
  observer(changes: MutationObserver) {}

  /**
   * @name onSwitch
   * Called every time the user navigates such as changing channel,
   * changing servers, changing to friends list, etc.
   */
  onSwitch() {}

  /**
   * @name getSettingsPanel
   * Called when the user clicks on the settings button for the plugin.
   * If this function is not implemented the button is not shown.
   *
   * Note: The button will be disabled if the plugin is disabled to avoid errors with not-started plugins.
   *
   * @Returns {string|HTMLElement} - either a valid string containing the html for the panel or an actual
   * element to be injected into the settings panel.
   */
  getSettingsPanel(): string | HTMLElement | JSX.Element {
     return SettingsPanel();
  }
}
