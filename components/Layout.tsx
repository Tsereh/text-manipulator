import React from 'react'
import styles from "./layout.module.css"
import Logo from "./Logo"

interface Props {
    children: React.ReactNode
}

export default function Layout(props: Props) {
  return (
    <div className={styles.container}>
      <Logo />
      {props.children}
    </div>
  );
}
