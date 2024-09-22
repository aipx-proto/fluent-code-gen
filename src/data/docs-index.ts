import { DocumentSuggestion } from "../lib/suggestion";

const cdkDocsIndex: DocumentSuggestion[] = [
  {
    path: "cdk/app-shell.md",
    title: "AppShell",
    description: "Provides App header and Left navigation. App header has customizable breadcrumb. Left nav has customizable active item.",
  },
  {
    path: "cdk/page-header.md",
    title: "PageHeader",
    description:
      "Top area of the page that provides the context for the user. It must have a title and can have toolbar, back button, tablist, and description text. Can only be used inside PageGrid.",
  },
  {
    path: "cdk/page-content.md",
    title: "PageContent",
    description: "Main area of the app. Can only be used inside PageGrid. This is the scrolling area for long content.",
  },
  { path: "cdk/layout.md", title: "Layout", description: "Implement custom layout with CSS grid and flex box" },
];

const stylesDocsIndex: DocumentSuggestion[] = [
  { path: "styles/icons.md", title: "Icons", description: "Full catalog of supported icon names and their metaphor" },
];

const componentDocsIndex: DocumentSuggestion[] = [
  {
    path: "fluent/components-badge-counter-badge--docs.md",
    title: "Counter Badge",
    description: "A counter badge is a badge that displays a numerical count.",
  },
  {
    path: "fluent/components-badge-presencebadge--docs.md",
    title: "PresenceBadge",
    description: "A presence badge is a badge that displays a status indicator such as available, away, or busy.",
  },
  {
    path: "fluent/components-badge-badge--docs.md",
    title: "Badge",
    description:
      "A badge is a visual decoration for UI elements. Different badges can display different content. Badge displays text and/or an iconCounterBadge displays numerical valuesPresenceBadge displays status",
  },
  {
    path: "fluent/components-breadcrumb--docs.md",
    title: "Breadcrumb",
    description: "For detailed guidance on when and how to use this component, go to Fluent 2 Breadcrumbs.",
  },
  {
    path: "fluent/components-avatargroup--docs.md",
    title: "AvatarGroup",
    description:
      "An AvatarGroup is a graphical representation of multiple people associated with a given entity. AvatarGroup leverages the Avatar component, with each Avatar representing a person and containing their image, initials, or an icon. An AvatarGroup can be represented\nin a spread, stack, or pie layout.",
  },
  { path: "fluent/components-button-button--docs.md", title: "Button", description: "A button triggers an action or event when activated." },
  {
    path: "fluent/components-accordion--docs.md",
    title: "Accordion",
    description: "An accordion allows users to toggle the display of content by expanding or collapsing sections.",
  },
  {
    path: "fluent/components-avatar--docs.md",
    title: "Avatar",
    description:
      "An Avatar is a graphical representation of a user, team, or entity. Avatar can display an image, icon, or initials, and supports various sizes and shapes.",
  },
  {
    path: "fluent/components-button-compoundbutton--docs.md",
    title: "CompoundButton",
    description:
      "A compound button is a button with an additional slot for secondary textual content. Since both primary and secondary textual contents are part of a compound button's name they should be kept concise.",
  },
  {
    path: "fluent/components-card-cardfooter--docs.md",
    title: "CardFooter",
    description:
      "The CardFooter component, used inside of a Card, uses a flex layout to organize actions the user can take with a Card, like sharing the contents or replying to a message.",
  },
  {
    path: "fluent/components-button-menubutton--docs.md",
    title: "MenuButton",
    description: "A menu button is a button with a chevron icon after the text typically used to trigger a menu.",
  },
  {
    path: "fluent/components-card-cardpreview--docs.md",
    title: "CardPreview",
    description: "The CardPreview component, used inside of a Card, allows the user to better visualize what the card's contents are.",
  },
  {
    path: "fluent/components-card-cardheader--docs.md",
    title: "CardHeader",
    description: "The CardHeader component, used inside of a Card, represents a Fluent UI compliant card header.",
  },
  { path: "fluent/components-button-togglebutton--docs.md", title: "ToggleButton", description: "A toggle button is a button that can be checked on and off." },
  {
    path: "fluent/components-button-splitbutton--docs.md",
    title: "SplitButton",
    description: "A split button is a button with a primary action and a secondary action primarily used for opening a menu.",
  },
  {
    path: "fluent/components-card-card--docs.md",
    title: "Card",
    description:
      "A card is a container that holds information and actions related to a single concept or object, like a document or a contact. Cards can give information prominence and create predictable patterns. While they're very flexible, it's important to use them consistently for particular use cases across experiences.",
  },
  {
    path: "fluent/components-checkbox--docs.md",
    title: "Checkbox",
    description:
      "Checkboxes give people a way to select one or more items from a group,\nor switch between two mutually exclusive options (checked or unchecked).",
  },
  { path: "fluent/components-divider--docs.md", title: "Divider", description: "A divider visually separates two pieces of content." },
  {
    path: "fluent/components-dialog--docs.md",
    title: "Dialog",
    description:
      "Dialog is a window overlaid on either the primary window or another dialog window. Windows under a modal dialog are inert. That is, users cannot interact with content outside an active dialog window. Inert content outside an active dialog is typically visually obscured or dimmed so it is difficult to discern, and in some implementations, attempts to interact with the inert content cause the dialog to close. Best practices Do Dialog boxes consist of a header (DialogTitle), content (DialogContent), and footer (DialogActions), which should all be included inside a body (DialogBody).Validate that people’s entries are acceptable before closing the dialog. Show an inline validation error near the field they must correct.Modal dialogs should be used very sparingly—only when it’s critical that people make a choice or provide information before they can proceed. Thee dialogs are generally used for irreversible or potentially destructive tasks. They’re typically paired with an backdrop without a light dismiss.Add a aria-describedby attribute on DialogSurface pointing to the dialog content on short confirmation like dialogs.Add a aria-label or aria-labelledby attribute on DialogSurface if there is no DialogTitle Don't Don't use more than three buttons between DialogActions.Don't open a Dialog from a DialogDon't use a Dialog with no focusable elements",
  },
  {
    path: "fluent/components-fluentprovider--docs.md",
    title: "FluentProvider",
    description: "The FluentProvider transforms a passed theme to CSS variables and passes other settings to Fluent UI components.",
  },
  {
    path: "fluent/components-combobox--docs.md",
    title: "Combobox",
    description: "A combobox (Combobox) combines a text field and a dropdown giving people a way to select an option from a list or enter their own choice.",
  },
  {
    path: "fluent/components-dropdown--docs.md",
    title: "Dropdown",
    description:
      "A Dropdown is a selection component composed of a button and a list of options. The button displays the current selected item or a placeholder, and the list is visible on demand by clicking the button. Dropdowns are typically used in forms. Best practices Do Provide a label for the Dropdown.Set the Option's value prop if the content contains JSX. The Option value is used for keyboard accessibility to enable users to type a letter or string and jump to the matching option. The value is calculated from the children by default, but if the Option contains JSX, the value prop should be used to directly provide a string value.Consider using Dropdown with outline or underline appearances. When the contrast ratio against the immediate surrounding color is less than 3:1, consider using underline or outline styles which has a bottom border stroke. But please ensure the color of bottom border stroke has a sufficient contrast which is greater than 3 to 1 against the immediate surrounding color. Don't Use placeholder for label text. Placeholder text has lower contrast than label text, and disappears once an option is selected. If used, it should only contain temporary filler text.",
  },
  { path: "fluent/components-field--docs.md", title: "Field", description: "Field adds a label, validation message, and hint text to a control." },
  { path: "fluent/components-image--docs.md", title: "Image", description: "An image displays graphical content such as a photo or illustration." },
  {
    path: "fluent/components-drawer--docs.md",
    title: "Drawer",
    description:
      "The Drawer gives users a quick entry point to configuration and information. It should be used when retaining context is beneficial to users. There are three main components to represent a Drawer: OverlayDrawer: An overlay Drawer renders on top of the whole page. By default blocks the screen and will require the user's full attention. Uses Dialog component under the hood.InlineDrawer: An inline Drawer renders within a container and can be placed next to any content.Drawer: A combination of OverlayDrawer and InlineDrawer. Used when toggling between the two modes is necessary. Often used for responsiveness.",
  },
  {
    path: "fluent/components-infolabel--docs.md",
    title: "InfoLabel",
    description:
      "An InfoLabel is a Label with an InfoButton at the end, properly handling layout and accessibility properties.\nIt can be used as a drop-in replacement for Label when an InfoButton is also needed. InfoButton/InfoLabel pattern What is an InfoLabel? An InfoLabel is composed of two components and a wrapper. The main component is a Label and the secondary component is an InfoButton.\nWe packaged both components to be able to achieve the correct accessibility out of the box. We automatically link the label to the\nbutton from the InfoButton component and apply aria-owns to the wrapper when the InfoButton's Popover is open. In addition, InfoLabel\nallows you to render only the InfoButton if that's desired. The reason why we don't export InfoButton separately is to avoid having\nissues with aria-owns. The PopoverSurface must be linked to the wrapper of the InfoButton when open, not doing so results in a\nviolation. What is the InfoButton pattern? The InfoButton pattern is a button that exposes additional information about a field or a concept. To trigger the Popover, the user may\nactivate the button by clicking on it and focusing on it and pressing enter or space. When the Popover is open, the focus is programmatically moved\nto the PopoverSurface. To close the Popover, the user may click the button again, click outside the popover, press the escape key, or tab out of\nthe PopoverSurface. Why is focus moved to the PopoverSurface? The reason why we move focus to the PopoverSurface is to allow the user to navigate the Popover with the keyboard. This allows screen reader and keyboard\nusers to read the content and interact with it without having to use the mouse and not have unreachable content. We move the focus specifically to the\nPopoverSurface and not the first focusable element because there might be a case where there's a paragraph of text and the first focusable element is at the\nbottom of the Surface. In this case, a screen reader user might not know there's more content above and therefore miss it. Can the InfoButton be opened on focus and not move focus to the PopoverSurface? InfoButtons can not be opened on focus. The pattern where you have an icon and a tooltip that appears on focus is not the InfoButton pattern. The tooltip\npattern is meant to have short text and no interaction with the content. We believe that if the content is short or even a few words, it should be included\nin the label or a secondary label. If the content is longer and/or has interaction, then it must be an InfoButton. If the tooltip + icon pattern is still needed, refer to the Icon example in tooltip on how to correctly achieve this pattern. Note that when using a\ntooltip, the content must be short and not have interaction.",
  },
  { path: "fluent/components-label--docs.md", title: "Label", description: "A label provides a name or title for an input." },
  {
    path: "fluent/components-link--docs.md",
    title: "Link",
    description: "Links allow users to navigate between different locations. They can be used as standalone controls or inline with text.",
  },
  { path: "fluent/components-input--docs.md", title: "Input", description: "Input allows the user to enter and edit text." },
  {
    path: "fluent/components-menu-menulist--docs.md",
    title: "MenuList",
    description: "A menu list displays a list of actions. It is usually rendered inside of the Menu component.",
  },
  { path: "fluent/components-datagrid--docs.md", title: "DataGrid", description: "" },
  {
    path: "fluent/components-messagebar--docs.md",
    title: "MessageBar",
    description:
      "Communicates important information about the state of the entire application or surface.\nFor example, the status of a page, panel, dialog or card. The information shouldn't require someone\nto take immediate action, but should persist until the user performs one of the required actions.",
  },
  {
    path: "fluent/components-portal-portal--docs.md",
    title: "Portal",
    description:
      'A portal renders content outside of a DOM tree, at the end of the document. This allows content to escape traditional boundaries caused by "overflow: hidden" CSS rules and keeps it on the top without using z-index rules. This is useful for example in Menu and Tooltip scenarios, where the content should always overlay everything else. Portal component is a thin wrapper around React\'s ReactDOM.createPortal() that propagates Fluent styling (allows to use tokens) and text-direction handling to the content. You can identify DOM created by Portal by looking for the data-portal-node attribute.',
  },
  {
    path: "fluent/components-persona--docs.md",
    title: "Persona",
    description: "A Persona is a visual representation of a person or status that showcases an Avatar, PresenceBadge, or an Avatar with a PresenceBadge.",
  },
  {
    path: "fluent/components-portal-tomountnodeprops--docs.md",
    title: "toMountNodeProps",
    description:
      "Fluent UI uses a wrapper component called Portal to render portals using ReactDOM.createPortal().\nPortal component accepts a mountNode prop that can be used to specify the DOM node where the portal should be rendered. That prop also accepts an object that allows to configure rendering of a mount node. For example, you can pass className to add a class to the mount node: To ensure that props normalization is consistent across all components, we use toMountNodeProps function to normalize mountNode prop. This function is used internally by Portal component, but it can be also used to build custom components that accept mountNode prop.",
  },
  { path: "fluent/components-popover--docs.md", title: "Popover", description: "A popover displays content on top of other content." },
  {
    path: "fluent/components-overflow--docs.md",
    title: "Overflow",
    description:
      "The Overflow and OverflowItem components, are low level utilities that enable users to create overflow\nexperiences with any component. The components will detect and hide overflowing elements in DOM and manage\nthe overflow state. Additional overflow hooks can be used to handle overflowing items. In the reference\nexamples below the overflowing items are handled using a Menu. Additional hooks will be needed to create your specific overflow scenario. Please refer to the reference implementations\nbelow, which will use the additional utilities:",
  },
  {
    path: "fluent/components-menu-menu--docs.md",
    title: "Menu",
    description: "A menu displays a list of actions. The Menu component handles the\nstate management of the passed in list of actions. See also MenuButton",
  },
  {
    path: "fluent/components-progressbar--docs.md",
    title: "ProgressBar",
    description: "A ProgressBar provides a visual representation of content being loaded or processed.",
  },
  {
    path: "fluent/components-radiogroup--docs.md",
    title: "RadioGroup",
    description:
      "RadioGroup lets people select a single option from two or more Radio items. Use RadioGroup to present all available choices if there's enough space. For more than 5 choices, consider using a different component such as Dropdown.",
  },
  {
    path: "fluent/components-rating--docs.md",
    title: "Rating",
    description:
      "A Rating component allows users to provide a rating for a particular item. Rating allows customers to determine a sense of value of a good or a service. By default, the rating is selected out of 5 stars, but the number and symbol used can be customized. To display the result of other users' rating values, use RatingDisplay instead.",
  },
  {
    path: "fluent/components-ratingdisplay--docs.md",
    title: "RatingDisplay",
    description:
      "RatingDisplay is used to communicate user sentiment. By default, it shows rating as filled stars out of 5, as well as a text displaying the average value and the aggregate number of ratings.",
  },
  {
    path: "fluent/components-searchbox--docs.md",
    title: "SearchBox",
    description:
      "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}import { SearchBox } from '@fluentui/react-components';Copy The SearchBox component allows the users to access information with ease, providing flexibility and the ability to clear and filter the search.",
  },
  {
    path: "fluent/components-select--docs.md",
    title: "Select",
    description: "A Select allows one option to be selected from multiple options. The Select component is a wrapper around the native <select> element.",
  },
  {
    path: "fluent/components-skeleton--docs.md",
    title: "Skeleton",
    description:
      "The Skeleton component is a temporary animation placeholder for when a service call takes time to return data and we don't want to block rendering the rest of the UI.",
  },
  {
    path: "fluent/components-slider--docs.md",
    title: "Slider",
    description: "A Slider represents an input that allows user to choose a value from within a specific range.",
  },
  {
    path: "fluent/components-spinbutton--docs.md",
    title: "SpinButton",
    description:
      "SpinButtons are used to allow numerical and non-numerical input bounded between minimum and maximum values with buttons to increment and decrement the input value.\nValues can also be manipulated via the keyboard.",
  },
  {
    path: "fluent/components-spinner--docs.md",
    title: "Spinner",
    description: "A spinner alerts a user that content is being loaded or processed and they should wait for the activity to complete.",
  },
  {
    path: "fluent/components-switch--docs.md",
    title: "Switch",
    description:
      'A switch represents a physical switch that allows someone to choose between two mutually exclusive options. For example, "On/Off" and "Show/Hide". Choosing an option should produce an immediate result.',
  },
  {
    path: "fluent/components-swatchpicker--docs.md",
    title: "SwatchPicker",
    description: "A swatch picker lets people choose a color, image, or pattern and apply it to graphics or text.",
  },
  { path: "fluent/components-tag-tag--docs.md", title: "Tag", description: "A Tag provides a visual representation of an attribute, person, or asset." },
  {
    path: "fluent/components-tag-interactiontag--docs.md",
    title: "InteractionTag",
    description:
      "A InteractionTag follows the same characteristics as a Tag, but with the added functionality of having a primary and secondary action. This is mostly used in scenarios where gaining more context for a InteractionTag is available for the user, an example would be clicking into a persona to expand their profile page.",
  },
  {
    path: "fluent/components-tag-taggroup--docs.md",
    title: "TagGroup",
    description: "A TagGroup is a container for multiple controls that are Tag or InteractionTag.",
  },
  {
    path: "fluent/components-tablist--docs.md",
    title: "TabList",
    description:
      "A tab list provides single selection from tabs. When a tab is selected, the application displays content associated with the selected tab and hides other content. Each tab typically contains a text header and often includes an icon.",
  },
  {
    path: "fluent/components-teachingpopover--docs.md",
    title: "TeachingPopover",
    description: "An extension class of Popover which defaults to withArrow and FocusTrap enabled.",
  },
  {
    path: "fluent/components-tagpicker--docs.md",
    title: "TagPicker",
    description:
      "A TagPicker combines a text field and a dropdown giving people a way to select an option from a list or enter their own choice. It is a specialized version of a Combobox where selecting an option from a list results in a Tag being added close to the text field. Best practices Do Use aria-label on TagPickerInput to provide an accessible name for the input: This attribute helps screen readers to understand the purpose of the input, making it more accessible and inclusive.Inform the user about the deletion interaction of tags when pressing Backspace: When TagPickerInput is focused, pressing the Backspace key will remove the last tag. This behavior should be communicated to the user to avoid confusion. Don't Don't use InteractionTag with TagPicker as it is not supported at the moment. This combination may lead to unexpected behavior.",
  },
  { path: "fluent/components-textarea--docs.md", title: "Textarea", description: "Textarea allows the user to enter and edit multiline text." },
  {
    path: "fluent/components-text--docs.md",
    title: "Text",
    description: "Typography and styling abstraction component used to ensure consistency and standardize text throughout your application.",
  },
  {
    path: "fluent/components-tooltip--docs.md",
    title: "Tooltip",
    description:
      "A tooltip displays additional information about another component.\nThe information is displayed above and near the target component.\nTooltip is not expected to handle interactive content.\nIf this is necessary behavior, an expand/collapse button + popover should be used instead.\nHover or focus the buttons in the examples to see their tooltips.",
  },
  {
    path: "fluent/components-toolbar--docs.md",
    title: "Toolbar",
    description: "A toolbar is a container for grouping a set of controls, such as buttons, menu buttons, or checkboxes.",
  },
  {
    path: "fluent/components-toast--docs.md",
    title: "Toast",
    description:
      "A Toasts displays temporary content to the user. Toasts are rendered as a separate surface that can be dismissed by\nuser action or a application timeout. Toasts are typically used in the following situations: Update the user on the status of a taskDisplay the progress of a taskNotify the user to take an actionNotify the user of an application updateWarn the user of an error The Fluent UI Toast component uses an imperative API. Once a Toaster has been rendered, you can use the\nuseToastController hook to get access to imperative methods to dispatch a Toast. The Toast component itself\nis simply a layout component. ⚠️ In order for notifications that use toast to be fully accessible, developers should include make the notifications\navailable on a permanent surface too. One of the ways to do this in an application is to implement a notification\ncentre.",
  },
  {
    path: "fluent/components-tree--docs.md",
    title: "Tree",
    description:
      'A hierarchical list structure component for displaying data in a collapsible and expandable way. Use this component when you need to present your users with a clear visual structure of content or data, allowing them to efficiently interact and navigate through the information. If the information is less hierarchical or node-based, consider using a list or table instead. Best practices Do Do use the Tree component to create a nested tree structure: When your data naturally follows a hierarchical parent-child relationship, the Tree component provides a clean and intuitive way to represent this structure. If a more complex interaction with a Tree is required, use FlatTree component instead: In scenarios where you need to efficiently manipulate or handle large amounts of hierarchical data, the FlatTree component can offer performance benefits.Use custom styles if the tree needs to support more than 10 levels of nesting: Depending on your design and data requirements, you may need to adjust the styling of the tree elements to accommodate deeper nesting levels. See inline styling tree item level for more information.Use the aria-label attribute on the root of the Tree component to provide an accessible name for the tree: This attribute helps screen readers to understand the purpose of the tree, making it more accessible and inclusive.Ensure continuity of keyboard navigation when manipulating tree items: When adding or removing items, take necessary measures to prevent unexpected focus loss. The user\'s active focus should remain logical and intuitive throughout interactions.If you provide additional functionality within tree items actions slot, make them accessible with a context menu:Make actions or additional functionality in tree items accessible with a context menu:⚠️ actions slot do not adhere to keyboard navigation standards! Use aria-description or aria-describedby on tree items to indicate this interaction, you should explain your user how to interact with actions slot.the actions slot will have role="toolbar" and are accessible with horizontal keyboard navigation using `useArrowNavigationGroup` by default.Use aria-selected=true once a treeitem is selected in custom behaviors Some tree utilization might use the selection feature for navigation purposes, in this case, the aria-selected attribute should be set to true once the treeitem is the current active item to indicate that it is selected for the navigation.',
  },
  { path: "fluent/components-table--docs.md", title: "Table", description: "" },
];

export const docsIndex = [...cdkDocsIndex, ...stylesDocsIndex, ...componentDocsIndex];
