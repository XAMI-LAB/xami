import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react'
import '../styles/Base.scss';

export default function ResearchProjectsPage() {
    const screens = useBreakpoint();

    return (
        <div className={`home-content`} style={{ marginLeft: screens.md ? "15%!important": "0%!important", maxWidth: screens.md ? "70%!important": "100%!important"}}>
            <div className="home-title title">
                Research Projects
            </div>
        </div >
    )
}
