import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Container } from "reactstrap";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      navLinks: [
        {
          id: 2,
          title: "Medical",
          link: "/#",
          isOpenSubMenu: false,
          isMegaMenu: true,
          child: [
            {
              title: "Acne",
              link: "/acne",
              description: "Topical and surgical acne solutions.",
            },
            {
              title: "Eczema",
              link: "/eczema",
              description: "Inflamed, itchy, red, cracked, and rough skin.",
            },
            {
              title: "Psoriasis",
              link: "/psoriasis",
              description:
                "Skin cells build up and form scales and itchy, dry patches.",
            },
            {
              title: "Vitiligo",
              link: "/vitiligo",
              description: "Here is a description about vitiligo",
            },
            {
              title: "Alopecia",
              link: "/alopecia",
              description: "Here is a description about alopecia.",
            },
            {
              title: "Mohs Surgery",
              link: "/mohs-surgery",
              description: "MOHS.",
            },
            {
              title: "Warts",
              link: "/warts",
              description: "Something here about warts.",
            },
          ],
          child2: [
            {
              title: "Skin Cancer Screening",
              link: "/skin-cancer-screening",
              description: "Latest cancer screening techniques.",
            },
            {
              title: "Rosacea",
              link: "/rosacea",
              description: "Stuff about rosacea.",
            },
            {
              title: "Moles",
              link: "/moles",
              description: "Something about moles here.",
            },
            {
              title: "Phototherapy NB-UVB",
              link: "/phototherapy",
              description: "Revolutionary treatment.",
            },
            {
              title: "PDT - Blue & Red Light Treatment",
              link: "/pdt",
              description: "Sounds really fancy.",
            },
          ],
        },
        {
          id: 3,
          title: "Cosmetic",
          link: "/#",
          isOpenSubMenu: false,
          isMegaMenu: true,
          child: [
            {
              title: "Botox & Dysport",
              link: "/botox-and-dysport",
              description:
                "Makes it impossible for you to show emotion on your face.",
            },
            {
              title: "Laser treatments - IPL",
              link: "/laser-treatments",
              description: "We have the most advanced in laser treatment.",
            },
            {
              title: "Laser Hair Removal",
              link: "/laser-hair-removal",
              description: "Remove all that gross hair and get yourself a man.",
            },
            {
              title: "Fillers",
              link: "/fillers",
              description: "Fill in those wrinkles!",
            },
            {
              title: "Body Contouring & Sculpting",
              link: "/body-contouring-and-sculpting",
              description: "Something about body conturing here.",
            },
            {
              title: "Microneedling",
              link: "/microneedling",
              description:
                "Got scars? Microneedling may be the answer for you.",
            },
            {
              title: "PRP",
              link: "/prp",
              description: "I don't even know what this is",
            },
          ],
          child2: [
            {
              title: "Acne Scars",
              link: "/acne-scars",
              description: "Let's annihilate those scars.",
            },
            {
              title: "Sculptra",
              link: "/sculptra",
              description: "Another thing I do not know.",
            },
            {
              title: "Kybella",
              link: "/kybella",
              description: "Probably an advanced filler of some type.",
            },
            {
              title: "Nova Threads",
              link: "/nova-threads",
              description: "No clue what this is.",
            },
            {
              title: "Chemical Peels",
              link: "/chemical-peels",
              description:
                "Don't ever put anything higher than 30% on your face unless you want it to melt.",
            },
            {
              title: "Facials",
              link: "/facials",
              description: "I could use one of these right now.",
            },
          ],
        },
        {
          id: 5,
          title: "Our Practice",
          link: "/our-practice",
        },
      ],
    };

    this.toggleLine = this.toggleLine.bind(this);
    this.openBlock.bind(this);
    this.openNestedBlock.bind(this);
  }

  toggleLine() {
    let body = document.querySelector("body");
    body.classList.toggle("no-scroll");
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  componentDidMount() {
    let body = document.querySelector("body");
    body.classList.remove("no-scroll");
    var matchingMenuItem = null;
    var ul = document.getElementById("top-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent1 = parent.parentElement;
      parent1.classList.add("active"); // li
      if (parent1) {
        const parent2 = parent1.parentElement;
        parent2.classList.add("active"); // li
        if (parent2) {
          const parent3 = parent2.parentElement;
          parent3.classList.add("active"); // li
          if (parent3) {
            const parent4 = parent3.parentElement;
            parent4.classList.add("active"); // li
          }
        }
      }
    }
  };

  openBlock = (level2_id) => {
    //match level 2 id with current clicked id and if id is correct then update status and open level 2 submenu
    this.setState({
      navLinks: this.state.navLinks.map((navLink) =>
        navLink.id === level2_id
          ? { ...navLink, isOpenSubMenu: !navLink.isOpenSubMenu }
          : navLink
      ),
    });
  };

  openNestedBlock = (level2_id, level3_id) => {
    var tmpLinks = this.state.navLinks;
    tmpLinks.map((tmpLink) =>
      //Match level 2 id
      tmpLink.id === level2_id
        ? tmpLink.child.map((tmpchild) =>
            //if level1 id is matched then match level 3 id
            tmpchild.id === level3_id
              ? //if id is matched then update status(level 3 sub menu will be open)
                (tmpchild.isOpenNestedSubMenu = !tmpchild.isOpenNestedSubMenu)
              : (tmpchild.isOpenNestedSubMenu = false)
          )
        : false
    );
    this.setState({ navLinks: tmpLinks });
  };

  render() {
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <Container className="text-dark">
            <div>
              <Link className="logo show-on-desktop" to="/index">
                Upper West Side Dermatology
              </Link>
            </div>
            <div>
              <Link className="logo show-on-mobile" to="/index">
                UWS Dermatology
              </Link>
            </div>
            <div className="menu-extras">
              <div className="menu-item">
                <Link
                  to="#"
                  onClick={this.toggleLine}
                  className={
                    this.state.isOpen ? "navbar-toggle open" : "navbar-toggle"
                  }
                >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>

            <div
              id="navigation"
              style={{ display: this.state.isOpen ? "block" : "none" }}
            >
              <ul className="navigation-menu" id="top-menu">
                {this.state.navLinks.map((navLink, key) =>
                  navLink.child || navLink.child2 ? (
                    <li className="has-submenu" key={key}>
                      {/* child item(menu Item) - Level 1 */}
                      <Link
                        to={navLink.link}
                        onClick={(event) => {
                          event.preventDefault();
                          this.openBlock(navLink.id);
                        }}
                      >
                        {navLink.title}
                      </Link>
                      <span className="menu-arrow"></span>
                      {navLink.isMegaMenu ? (
                        // if menu is mega menu(2 columns grid)
                        <ul
                          className={
                            navLink.isOpenSubMenu
                              ? "submenu megamenu open"
                              : "submenu megamenu"
                          }
                        >
                          <li>
                            <ul>
                              {navLink.child.map((item, childKey) => (
                                <li key={childKey}>
                                  <Link to={item.link}>
                                    {item.title}
                                    {item.isNew ? (
                                      <span className="badge badge-danger rounded ml-2">
                                        v2.0
                                      </span>
                                    ) : null}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li>
                            <ul>
                              {navLink.child2 &&
                                navLink.child2.map((item, childKey) => (
                                  <li key={childKey}>
                                    <Link to={item.link}>
                                      {item.title}
                                      {item.isOnePage ? (
                                        <span className="badge badge-warning rounded ml-2">
                                          Onepage
                                        </span>
                                      ) : null}
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                          </li>
                        </ul>
                      ) : (
                        // if menu is not mega menu(1grid)
                        <ul
                          className={
                            navLink.isOpenSubMenu ? "submenu open" : "submenu"
                          }
                        >
                          {navLink.child.map((childArray, childKey) =>
                            childArray.nestedChild ? (
                              // sub menu item - Level 2
                              <li className="has-submenu" key={childKey}>
                                <Link
                                  to={childArray.link}
                                  onClick={(event) => {
                                    event.preventDefault();
                                    this.openNestedBlock(
                                      navLink.id,
                                      childArray.id
                                    );
                                  }}
                                >
                                  {" "}
                                  {childArray.title}{" "}
                                  {childArray.isAdded ? (
                                    <span className="badge badge-primary rounded">
                                      Added
                                    </span>
                                  ) : null}
                                </Link>
                                <span className="submenu-arrow"></span>
                                <ul
                                  className={
                                    childArray.isOpenNestedSubMenu
                                      ? "submenu open"
                                      : "submenu"
                                  }
                                >
                                  {childArray.nestedChild.map(
                                    (nestedChildArray, nestedKey) => (
                                      // nested sub menu item - Level 3
                                      <li key={nestedKey}>
                                        <Link to={nestedChildArray.link}>
                                          {nestedChildArray.title}{" "}
                                          {nestedChildArray.isAdded ? (
                                            <span className="badge badge-primary rounded">
                                              Added
                                            </span>
                                          ) : null}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </li>
                            ) : (
                              <li key={childKey}>
                                <Link to={childArray.link}>
                                  {childArray.title}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={key}>
                      <Link to={navLink.link}>{navLink.title}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}

export default withRouter(Topbar);
