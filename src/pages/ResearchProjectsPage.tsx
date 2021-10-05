import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react'
import {isMobile, isIE} from 'react-device-detect';
import '../styles/Base.scss';

export default function ResearchProjectsPage() {
    const screens = useBreakpoint();

    if (isIE) return (<div> IE is not supported. Download Chrome/Edge/Firefox </div>)
    var device = "desktop"
    if (isMobile) {
        device = "mobile"
    }

    return (
        <div className={`home-content ${device}`}>
            <div className="home-title title">
                Research Projects
            </div>
        </div >
    )
}
