
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Menu } from '../components/Menu'
import { BlogPage } from '../pages/BlogPage'
import { HomePage } from '../pages/HomePage'

export const DashboardRouter = () => {
    return (
        <div>
            <Menu/>
            <Switch>
                <Route exact path = '/' component = {HomePage}></Route>
                <Route exact path = '/blog' component = {BlogPage}></Route>
                <Redirect to = '/'/>
            </Switch>
            <Footer/>
        </div>
    )
}
