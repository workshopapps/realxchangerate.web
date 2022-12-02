import styled from 'styled-components'

export const StyledCardWrapper = styled.div`
    background: #FFFFFF;
    border: 1px solid #CBD5E1;
    border-radius: 16px;
    user-select: none;

    max-width: 589px;
    margin-inline: auto;
    /* height: 260px; */

    padding: 32px 24px;

    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 10px;

    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    &:hover {
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
`;

export const StyledCardTitle = styled.h3`
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;

    color: ${props => props.theme.$styled.colors.text900};
`;

export const StyledCardMessage = styled.p`
    margin-block-end: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.001em;

    color: ${props => props.theme.$styled.colors.text600};
`;

export const StyledCardButton = styled.button`
    /* would recieve prop, $complaintButton: 'Resolve' | 'Resolved' | 'Unresolved' | 'Still in Review'  */

    cursor: pointer;

    min-width: 112px;
    margin-inline-start: auto;
    margin-top: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    border-radius: ${props => props.theme.$styled.borderRadius.sm};


    background: ${props => props.$complaintButton === 'Resolve' ? '#0062FF' : 'inherit'};
    
    color: ${props =>
        props.$complaintButton === 'Resolved' ? '#10B981'
            : props.$complaintButton === 'Unresolved' ? '#EF4444'
                : props.$complaintButton === 'Still in Review' ? '#F59E0B'
                    : '#F8FAFC'};
    border: 1px solid ${props =>
        props.$complaintButton === 'Resolved' ? '#10B981'
            : props.$complaintButton === 'Unresolved' ? '#EF4444'
                : props.$complaintButton === 'Still in Review' ? '#F59E0B'
                    : '#0062FF'};

    &:hover {
        transform: scale(1.05);
    }
`;