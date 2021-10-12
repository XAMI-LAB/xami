import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react'
import '../styles/Base.scss';

export default function ResearchProjectsPage() {
    const screens = useBreakpoint();

    return (
        <div className={`home-content`} style={{ marginLeft: screens.md ? "15%": "0%", maxWidth: screens.md ? "70%": "100%"}}>
            <div className="home-title title">
                Research Projects
            </div>
        </div >
    )
}
