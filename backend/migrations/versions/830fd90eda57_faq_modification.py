"""faq modification

Revision ID: 830fd90eda57
Revises: 99e8c436ffa8
Create Date: 2022-11-30 08:24:29.045792

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '830fd90eda57'
down_revision = '99e8c436ffa8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('faq', sa.Column('question', sa.String(), nullable=False))
    op.add_column('faq', sa.Column('answer', sa.String(), nullable=False))
    op.drop_index('ix_faq_title', table_name='faq')
    op.create_index(op.f('ix_faq_question'), 'faq', ['question'], unique=True)
    op.drop_column('faq', 'title')
    op.drop_column('faq', 'content')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('faq', sa.Column('content', sa.VARCHAR(), nullable=False))
    op.add_column('faq', sa.Column('title', sa.VARCHAR(), nullable=False))
    op.drop_index(op.f('ix_faq_question'), table_name='faq')
    op.create_index('ix_faq_title', 'faq', ['title'], unique=False)
    op.drop_column('faq', 'answer')
    op.drop_column('faq', 'question')
    # ### end Alembic commands ###