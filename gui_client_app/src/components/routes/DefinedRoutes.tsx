import { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'

import AddTab from '../add/AddTab'
import OptionNavigator from '../OptionNavigator'
import SearchTab from '../search/SearchTab'
import SettingsTab from '../settings/SettingsTab'

const DefinedRoutes = (): ReactElement => (
    <Routes>
        <Route path="/" element={<OptionNavigator />} />
        <Route path="/search" element={<SearchTab />} />
        <Route path="/add" element={<AddTab />} />
        <Route path="/settings" element={<SettingsTab />} />
    </Routes>
)

export default DefinedRoutes
