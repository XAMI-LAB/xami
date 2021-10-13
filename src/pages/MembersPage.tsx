import React from 'react'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import MembersSection from '../components/member/MembersSection';
import { allMembers, MemberOutputDto, OccupationSection } from '../models/member'
import '../styles/Base.scss'

export default function MembersPage() {

    const screen = useBreakpoint()
    const members = allMembers;

    const getMemberShowingSectionWithOccupation = (title: string, occupationSection: OccupationSection) => {
        var membersInSection = members.filter(m => m.occupation === occupationSection).sort((a: MemberOutputDto, b: MemberOutputDto) => a.orderNumber - b.orderNumber);
        if (membersInSection.length > 0) {
            return <div style={{ marginBottom: "5vh" }}>
                <MembersSection key={title} members={membersInSection} title={title} />
            </div>
        } else {
            return <div></div>
        }
    }

    return (
        <div className={`home-content`} style={{ marginLeft: screen.md ? "15%": "0%", maxWidth: screen.md ? "70%": "100%"}}>
            {
                [
                    getMemberShowingSectionWithOccupation("Leaders", OccupationSection.Leader),
                    getMemberShowingSectionWithOccupation("Collaborators", OccupationSection.Collaborators),
                    getMemberShowingSectionWithOccupation("Researchers", OccupationSection.HDRStudents),
                    getMemberShowingSectionWithOccupation("External Researchers", OccupationSection.ExternalResearchers),
                ]
            }
        </div>
    )
}
