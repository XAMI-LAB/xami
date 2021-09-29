import React from 'react'
import MembersSection from '../components/member/MembersSection';
import { allMembers, MemberOutputDto, OccupationSection } from '../models/member'

export default function MembersPage() {

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
        <div style={{ marginBottom: "200px"}}>
            {
                [
                    getMemberShowingSectionWithOccupation("Founder", OccupationSection.Founder),
                    getMemberShowingSectionWithOccupation("Collaborators", OccupationSection.Collaborators),
                    getMemberShowingSectionWithOccupation("Researchers", OccupationSection.HDRStudents),
                ]
            }
        </div>
    )
}
