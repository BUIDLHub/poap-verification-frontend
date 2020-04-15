import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import cn from "classnames";
import * as align from "Constants/alignments";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className={cn("navbar_container", align.full, "top")}>
        <Navbar
          className={cn(
            "logo_positioned",
            "nav_style",
            "nav-margin-fix",
            "py-3",
            "nav_collapse_style"
          )}
          dark
          expand="md"
        >
          <NavbarToggler
            className={cn(
              // 'd-none',
              "ml-xs-2",
              "ml-md-0",
              "mr-md-3"
            )}
            onClick={this.toggle}
          />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav
              className={cn(
                "ml-auto",
                "mr-md-5",
                "nav_toggler_collapse_style",
                "nav-right-margin-fix"
              )}
              navbar
            >
              <NavItem
                className={cn(
                  "nav-link-placement",
                  "mr-md-4",
                  "nav_items_collapse_style"
                )}
              >
                <a
                  className={cn("nav_link")}
                  href="https://buidlhub.gitbook.io/buidlhub/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Docs
                </a>
              </NavItem>
              <NavItem
                className={cn(
                  "nav-link-placement",
                  "mr-md-4",
                  "nav_items_collapse_style"
                )}
              >
                <a
                  className={cn("nav_link")}
                  href="https://medium.com/buidlhub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </NavItem>
              <NavItem
                className={cn(
                  "nav-link-placement",
                  "mr-md-4",
                  "nav_items_collapse_style"
                )}
              >
                <a
                  className={cn("nav_link")}
                  href="/eventflow/about"
                  // target="_blank"
                  // rel="noopener noreferrer"
                >
                  About
                </a>
              </NavItem>
            </Nav>
          </Collapse>
          {/* </div> */}
        </Navbar>
      </div>
    );
  }
}
