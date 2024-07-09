import React from 'react'

import ContactsFormForSMTP from './components/ContactsFormForSMTP/ContactsFormForSMTP'
import ContactsInfo from './components/ContactsInfo/ContactsInfo'

import style from './style.module.scss'
import Layout from "../../components/Layout/Layout";

export default function ContactsBlock() {
	return (
		<div className={style.Contacts}>
			<Layout>
				<div className={style.ContactsInner}>
					<div className={style.ContactsInfo}>
						<ContactsInfo />
					</div>
					<div className={style.ContactsForm}>
						<ContactsFormForSMTP />
					</div>
				</div>
			</Layout>
		</div>
	)
}
