import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react'

export default function ResearchProjectsPage() {
    const screens = useBreakpoint();

    return (
        <div style={{ padding: "40px", maxWidth: "1360px" }} >
            <div style={{ fontFamily: "Playfair Display", fontSize: screens.md ? "62px" : "32px", fontWeight: "bold", paddingBottom: "46px" }}>
                Research Projects
            </div>
        </div >
    )
}
