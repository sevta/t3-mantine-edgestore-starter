"use client";

import {
  ActionIcon,
  Button,
  Container,
  Input,
  MantineColorsTuple,
  Menu,
  Modal,
  NavLink,
  createTheme,
} from "@mantine/core";

// const fontFamily =
//   "system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif";

const primary: MantineColorsTuple = [
  "#deffff",
  "#cafdff",
  "#9af8ff",
  "#66f4fd",
  "#3ff1fb",
  "#28effb",
  "#0ceefc",
  "#00d3e1",
  "#00bcc9",
  "#00a3af",
];

const secondary: MantineColorsTuple = [
  "#ffe8f6",
  "#ffcfe7",
  "#ff9bcb",
  "#ff64af",
  "#fe3897",
  "#fe1c87",
  "#ff0980",
  "#e4006d",
  "#cc0061",
  "#b30053",
];

const palePurple: MantineColorsTuple = [
  "#f2f0ff",
  "#e0dff2",
  "#bfbdde",
  "#9b98ca",
  "#7d79ba",
  "#6a65b0",
  "#605bac",
  "#504c97",
  "#464388",
  "#3b3979",
];

export const theme = createTheme({
  primaryColor: "dark",
  defaultRadius: "md",
  primaryShade: 4,
  fontSmoothing: true,

  colors: {
    palePurple,
  },

  activeClassName: "",

  black: "#343a40",

  fontFamily: "Geist",
  headings: {
    fontFamily: "Geist",
  },
  components: {
    Container: Container.extend({
      defaultProps: {
        size: "sm",
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        centered: true,
        overlayProps: {
          blur: 18,
          backgroundOpacity: 0.3,
        },
      },
    }),
    Menu: Menu.extend({
      defaultProps: {
        transitionProps: {
          transition: "pop",
        },
      },
      classNames: {
        dropdown: "border-0 shadow",
        itemLabel: "font-medium",
      },
    }),
    Button: Button.extend({
      defaultProps: {
        radius: "xl",
        fw: 500,
      },
    }),
    NavLink: NavLink.extend({
      defaultProps: {
        fw: 500,
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        radius: "xl",
        variant: "default",
      },
    }),
    Input: Input.extend({
      classNames: {
        input:
          "focus:ring-2 focus:border-[var(--mantine-primary-color-light)] focus:ring-[var(--mantine-primary-color-light)]",
      },
    }),
  },
});
