# wired-button
Hand-drawn sketchy Button web component.

## Usage

```html
<wired-button>Click Me</wired-button>
<wired-button disabled>Disabled</wired-button>
<wired-button elevation="3">Elevation</wired-button>
```

## Properties

**elevation** - Number between  1 and 5 (inclusive) that gives the button a sketchy height. Default value is 1.

**disabled** - disables the button. Default value is false. 

## Events

**click** - When button is clicked/submitted

# wired-calendar

Calendar control with a hand-drawn, wireframe like, style.

## Usage

```html
<wired-calendar selected="Jul 4, 2019">
</wired-calendar>
```

## Properties

**elevation** - Numerical number between 1-5 (inclusive) - sets the elevation of the card. Default is 1.

**selected** - Optional string value that will be parsed as Date. Pre selects a date highlighted in the calendar.

**firstdate** - Optional string value that will be parsed as Date. Lower limit of valid dates.

**lastdate** - Optional string value that will be parsed as Date. Higher limit of valid dates.

**locale** - Optional string value to set locale used ONLY FOR RENDERING headers in calendar. Default to browser locale. Note: All internal and external dates handling are not affected by locale.

**disabled** - Boolean value that disables the calendar selector. Default value is false.

**initials** - Boolean value to use initials in weekdays names. Default value is false.

**value** - javascript object that contains the selected Date object and the
corresponding formatted text.

**format** - gets/sets the javascript function to format a Date object into a
formatted text.

## Custom CSS Variables

**--wired-calendar-bg** Background color of the calendar. Default white.

**--wired-calendar-color** Calendar sketch line color. Default black.

**--wired-calendar-selected-color** Selected date sketch line color. Default red.

**--wired-calendar-dimmed-color** Font color days not belonging to calendar actual month. Default gray.

## Events
**selected** event fired when a date is selected by the user.

# wired-card

wired-card is a container for other web elements - with a hand-drawn, wireframe like, look.

## Usage

```html
<wired-card>
  <p>Elevation: 1</p>
</wired-card>

<wired-card elevation="3">
  <p>Elevation: 3</p>
</wired-card>
```

## Properties

**elevation** - Numerical number between 1-5 (inclusive) - sets the elevation of the card. Default is 1.

**fill** - A color to fill the background of the card in a sketchy format

## Methods

**requestUpdate()** - When dynamically adding content to the card, call this method to recompute the boundaries of the card.

# wired-checkbox
Hand-drawn sketchy checkbox web component.

## Usage

```html
<wired-checkbox>Checkbox One</wired-checkbox>
<wired-checkbox checked>Checkbox Two</wired-checkbox>
<wired-checkbox disabled>Disabled checkbox</wired-checkbox>
```

## Properties

**checked** - Checked state (boolean). Default is false.

**disabled** - Disables the checkbox. Default value is false. 

## Custom CSS Properties

**--wired-checkbox-icon-color** Color of the checkbox. Default is *currentColor*.

## Events
**change** event fired when state of the checkbox changes, i.e. the user checks/unchecks the box.

# wired-combo

Combobox control - similar to a native browser select element; with a hand-drawn, wireframe like, style.

## Usage

```html
<wired-combo id="combo" selected="two">
  <wired-item value="one">Number One</wired-item>
  <wired-item value="two">Number Two</wired-item>
  <wired-item value="three">Number Three</wired-item>
</wired-combo>
```

## Properties

**disabled** - disables the combo selector. Default value is false. 

**selected** - Value of the selected wired-item. 

## Custom CSS Variables

**--wired-combo-popup-bg** Background color of the dropdown when combo selector is open.

**--wired-item-selected-bg** Background color of the selected item

## Events
**selected** event fired when an item is selected by the user.

# wired-dialog
Hand-drawn sketchy Dialog web component.

## Usage

```html
<wired-dialog>
  <p>
    Dialog content here
  </p>
  <div style="text-align: right; padding: 30px 16px 16px;">
    <wired-button id="closeDialog">Close dialog</wired-button>
  </div>
</wired-dialog>
```

## Properties

**elevation** - Number between  1 and 5 (inclusive) that gives the sketchy link underline a height. Default value is 1.

**open** - Boolean value telling dialog if it's showing or not.

## Custom CSS Properties

**--wired-dialog-z-index** - Sets the `z-index` of the dialog

# wired-divider
Hand-drawn sketchy line to divide sections

## Usage

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<wired-divider></wired-divider>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
```

## Properties

**elevation** - Number between  1 and 5 (inclusive) represents number of lines drawn. Default value is 1.

# wired-fab
Hand-drawn sketchy Floating Action Button (FAB)

## Usage

```html
<wired-fab id="btn1">
  <mwc-icon>favorite</mwc-icon>
</wired-fab>
<wired-fab id="btn2" class="red">
  <mwc-icon>close</mwc-icon>
</wired-fab>
```

## Properties

**disabled** - disables the button. Default value is false. 

## Custom CSS Properties

**--wired-fab-bg-color** - Background color of the fab. Default value is #018786. Foreground color is set by setting the **color** css property.

## Events

**click** - When button is clicked/submitted

# wired-icon-button

This is a hand-drawn sketchy round button with an image placed at the center. Image could also be in icon, like [@material/mwc-icon](https://www.npmjs.com/package/@material/mwc-icon).

## Usage

```html
<wired-icon-button>
  <mwc-icon>favorite</mwc-icon>
</wired-icon-button>
<wired-icon-button class="red">
  <mwc-icon>favorite</mwc-icon>
</wired-icon-button>
```

## Properties

**disabled** - disables the button. Default value is false. 

## Custom CSS Variables

**--wired-icon-size** Numeric size of the icon. Default is 24 (px).

**--wired-icon-bg-color** Background color.

## Events

**click** - When button is clicked/submitted

# wired-image

wired-image displays an image and draws a sketchy border around it. 

## Usage

```html
<wired-image src="https://www.gstatic.com/webp/gallery/1.sm.jpg"></wired-image>
<wired-image elevation="4" src="https://www.gstatic.com/webp/gallery/1.sm.jpg"></wired-image>
```

## Properties

**src** - URL of the image.

**elevation** - Numerical number between 1-5 (inclusive) - sets the elevation of the card. Default is 1.

# wired-input
Hand-drawn sketchy text input web component.

## Usage

```html
<wired-input></wired-input>
<wired-input placeholder="Enter name"></wired-input>
<wired-input type="password" placeholder="Password"></wired-input>
<wired-input placeholder="Disabled" disabled></wired-input>
```

## Properties

**placeholder** - Placeholder text for the input.

**disabled** - disables the control

**type** - Input type e.g. password

**value** - Value of the text.

## Events

Fires all events a standard `<input>` element fires.

# wired-item

wired-item is a list item used by Wired components like wired-combo and wired-list-box

# wired-link
Hand-drawn sketchy Anchor/Link web component.

## Usage

```html
<wired-link href="/more.html">Learn more</wired-link>
<wired-link elevation="3" href="/more.html" target="_blank">Elevation</wired-link>
```

## Properties

**elevation** - Number between  1 and 5 (inclusive) that gives the sketchy link underline a height. Default value is 1.

**href** - URL of the page to link to

**target** - Similar to the target property of `<a>`, the target window of this link.

## Custom CSS Properties

**--wired-link-decoration-color** - Color of the sketchy underline of the link. Default value is blue. Foreground color is set by setting the **color** css property.

# wired-listbox

A listbox control with Wired hand-drawn styling. The selected item is highlighted. Can be vertical (default) or horizontal.

## Usage

```html
 <wired-listbox id="combo" selected="two">
  <wired-item value="one">Number One</wired-item>
  <wired-item value="two">Number Two</wired-item>
  <wired-item value="three">Number Three</wired-item>
</wired-listbox>

<wired-listbox horizontal selected="two"
     style="--wired-item-selected-color: darkred; --wired-item-selected-bg: pink;">
  <wired-item value="one">Number One</wired-item>
  <wired-item value="two">Number Two</wired-item>
  <wired-item value="three">Number Three</wired-item>
</wired-listbox>
```

## Properties

**horizontal** - Boolean indicated if the items are layed out horizontally. Default is false.

**selected** - Value of the selected item. 

## Custom CSS Variables

**--wired-item-selected-bg** Background color of the selected item.

**--wired-item-selected-color** Text color of the selected item.

## Events
**selected** event fired when an item is selected by the user.

# wired-progress-ring
Hand-drawn sketchy progress-ring web component.

## Usage

```html
<wired-progress-ring value="25"></wired-progress-ring>
<wired-progress-ring value="10" min="5" max="15"></wired-progress-ring>
```

## Properties

**value** - Numeric value of the progress.

**min** - Minimum value. Default is 0.

**max** - Maximum value. Default is 100.

**hideLabel** - Hide the label in the center of the ring. This label shows the current value. Default is `false`.

**showLabelAsPercent** - When showing the label, show the value as a percentage. Default value is `false`.

**precision** - When showing the label as a percentage, this value can be set to specify the precision to round the value to. By default, the value rounded to a whole number. 

## Custom CSS Variables

**--wired-progress-color** Color of the progress bar. Default is `blue`.

The font and color of the label can be set the by styling the `wired-progress-ring` element.

# wired-progress
Hand-drawn sketchy progress bar web component.

## Usage

```html
<wired-progress value="25"></wired-progress>
<wired-progress value="10" min="5" max="15"></wired-progress>
```

## Properties

**value** - Numeric value of the progress.

**min** - Minimum value. Default is 0.

**max** - Maximum value. Default is 100.

**percentage** - Boolean indicating if the label should show a % symbol.

## Custom CSS Variables

**--wired-progress-label-color** Color of the label. Default is *black*.

**--wired-progress-label-background** Backgroind of label. Default is *rgba(255,255,255,0.9)*.

**--wired-progress-font-size** Font size of the label. Default is *14px*

**--wired-progress-color** Color of the progress bar. Default is *rgba(0, 0, 200, 0.8)*.

# wired-radio-group
Allows user to select at most one radio button from a set. Works with `wired-radio`.

## Usage

```html
<wired-radio-group selected="two">
  <wired-radio name="one">One</wired-radio>
  <wired-radio name="two">Two</wired-radio>
  <wired-radio name="three">Three</wired-radio>
  <wired-radio name="four">Four</wired-radio>
</wired-radio-group>
```

## Properties

**selected** - Named of the selected radio button.

## Events

**selected** Event fired when user changes selection

# wired-radio
Hand-drawn sketchy radio button web component. Usually used with `wired-radio-group`.

## Usage

```html
<wired-radio>Radio One</wired-radio>
<wired-radio checked>Radio Two</wired-radio>
<wired-radio disabled>Disabled Radio</wired-radio>
```

## Properties

**checked** - Checked state (boolean) of the radio button. Default is false.

**disabled** - disables the radio button. Default value is false. 

**text** - Text associated with the radio button.

**name** - A name associated with the radio inside a radio-group.

## Custom CSS Variables

**--wired-radio-icon-color** Color of the radio button. Default is *currentColor*.

## Events
**change** - event fired when state of the radio changes, i.e. the user checks/unchecks the radio.

# wired-search-input
Hand-drawn sketchy search text input web component.

## Usage

```html
<wired-search-input></wired-search-input>
<wired-search-input placeholder="Search here"></wired-search-input>
```

## Properties

**placeholder** - Placeholder text for the input.

**disabled** - disables the control

**value** - Value of the text.

## Events

Fires all events a standard `<input>` element fires.

# wired-slider

Hand-drawn sketchy slider web component which allows user to select a value from a range by moving the slider thumb.

Range can be set using the min, max value. Default range is 0-100.

## Usage

```html
<wired-slider></wired-slider>
<wired-slider disabled></wired-slider>
<wired-slider value="10" min="5" max="15"></wired-slider>
```

## Properties

**value** - Numeric value of the slider.

**min** - Minimum value of the slider. Default is 0.

**max** - Maximum value of the slider. Default ia 100.

## Custom CSS Variables

**--wired-slider-knob-zero-color** Color of the knob when the value is at minimum.

**--wired-slider-knob-color** Color of the knob when the value is NOT at minimum.

**--wired-slider-bar-color** Color of the bar on which the knob slides. 

## Events

**change** event fired when the user changes the slider value.

# wired-spinner
Hand-drawn sketchy spinner to show progress or a pending task.

## Usage

```html
<wired-spinner id="sp"></wired-spinner>
<wired-spinner spinning duration="1000"></wired-spinner>
```

## Properties

**spinning** - Is the spinner spinning. Default is *false*.

**duration** - Time in milliseconds to complete one complete spin. Default is *1500*

## Styling

Change the **color** style of the spinner element to change its color.

# wired-tabs
Hand-drawn sketchy Tabs web component.

## Usage

```html
<wired-tabs selected="Two">
  <wired-tab name="One">
    <h4>Card 1</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </wired-tab>
  <wired-tab name="Two">
    <h4>Card 2</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </wired-tab>
  <wired-tab name="Three">
    <h4>Card 3</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </wired-tab>
</wired-tabs>
```

## WiredTabs Properties

**selected** - Name of the currently selected tab

## WiredTab Properties

**name** - Unique identifier for that tab. Used for selection. 

**label** - Text to show in the tab. Defaults to the **name** property.

## Custom CSS Variables

**--wired-item-selected-bg** Background color of the selected tab.

**--wired-item-selected-color** Text color of the selected tab.

# wired-textarea
Hand-drawn sketchy multi-line text input web component. 

## Usage

```html
<wired-textarea placeholder="Enter text" rows="6"></wired-textarea>
```

## Properties

**rows** - Initial number of rows in textarea.

**maxrows** - Max number of rows textarea grows to. Then scrollbars appear. 

**value** - Text value.

**disabled** - Disabled the control.

**placeholder** - Placeholder text for the input.

## Events

Fires all the events the native `<textarea>` element fires

![wired textarea](https://wiredjs.github.io/wired-elements/images/textarea.png)

# wired-toggle
Hand-drawn sketchy toggle button / switch.

## Usage

```html
<wired-toggle></wired-toggle>
<wired-toggle checked></wired-toggle>
```

## Properties

**checked** - Checked state (boolean). 

**disabled** - disables the toggle button. Default value is false. 

## Custom CSS Variables

**--wired-toggle-off-color** Color of the knob when in off (false) position. Default value is *gray*.

**--wired-toggle-on-color** Color of the knob when in on (true) position. Default value is *rgb(63, 81, 181)*.

## Events
**change** event fired when state of the toggle is changed by the user.

# wired-video

A hand-drawn sketchy looking video player component.

## Usage

```html
<wired-video autoplay muted loop src="video.mp4"></wired-video>
```

## Properties

**src** - URL of the video.

**autoplay** - Boolean value indicating if the video should auto-play

**loop** - Loop the video (boolean value)

**muted** - Play the video muted (boolean value)

**playsinline** - Play the video inline on mobile devices (boolean value)

## Custom CSS Variables

**--wired-video-highlight-color** Color of the progress bar and the knob on the volume control.