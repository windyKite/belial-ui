import React, { ReactElement } from "react";
import classnames from "classnames";
import "./style";

interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {}
interface LayoutProps extends BasicProps {
  children: ReactElement[] | ReactElement;
}

interface LayoutProps extends BasicLayoutProps {
  children: ReactElement[] | ReactElement;
}

export interface BasicLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const layoutPrefixCls: string = "belial-layout";

const Layout: React.FC<LayoutProps> & {
  Header: React.FC<BasicProps>;
  Content: React.FC<BasicProps>;
  Footer: React.FC<BasicProps>;
  Aside: React.FC<BasicProps>;
} = (props: LayoutProps) => {
  const { children, className, ...restProps } = props;

  const hasAside: boolean =
    "length" in children
      ? children.some((el) => {
          return el.type === Aside;
        })
      : false;

  console.log('hasAside')
  console.log(children)

  const classes: string = classnames(layoutPrefixCls, className, {
    [`${layoutPrefixCls}-has-aside`]: hasAside,
  });

  return (
    <section className={classes} {...restProps}>
      {children}
    </section>
  );
};

/**
 * Header
 * @param props
 */
const Header: React.FC<BasicProps> = (props) => {
  const { children, className, ...restProps } = props;

  const classes: string = classnames(`${layoutPrefixCls}-header`, className);

  return (
    <header className={classes} {...restProps}>
      {children}
    </header>
  );
};

/**
 * Content
 * @param props
 */
const Content: React.FC<BasicProps> = (props) => {
  const { children, className, ...restProps } = props;

  const classes: string = classnames(`${layoutPrefixCls}-content`, className);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

/**
 * Footer
 * @param props
 */
const Footer: React.FC<BasicProps> = (props) => {
  const { children, className, ...restProps } = props;

  const classes: string = classnames(`${layoutPrefixCls}-footer`, className);

  return (
    <footer className={classes} {...restProps}>
      {children}
    </footer>
  );
};

/**
 * Aside
 * @param props
 */
const Aside: React.FC<BasicProps> = (props) => {
  const { children, className, ...restProps } = props;

  const classes: string = classnames(`${layoutPrefixCls}-aside`, className);

  return (
    <aside className={classes} {...restProps}>
      {children}
    </aside>
  );
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Aside = Aside;

export default Layout;
