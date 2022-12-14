"""Suggestions table

Revision ID: ad7844e780c5
Revises: 8381fd73b86c
Create Date: 2022-12-10 11:41:21.841124

"""
from alembic import op
import sqlalchemy as sa
import sqlalchemy_utils


# revision identifiers, used by Alembic.
revision = 'ad7844e780c5'
down_revision = '8381fd73b86c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('advert',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sqlalchemy_utils.types.email.EmailType(length=255), nullable=True),
    sa.Column('pixel_size', sa.String(length=100), nullable=False),
    sa.Column('number_of_impressions', sa.String(length=200), nullable=False),
    sa.Column('ref_number', sa.Integer(), nullable=True),
    sa.Column('link_to_banner_image', sa.String(length=500), nullable=False),
    sa.Column('timestamp', sa.DateTime(timezone=True), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_advert_id'), 'advert', ['id'], unique=False)
    op.create_table('suggestions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sqlalchemy_utils.types.email.EmailType(length=255), nullable=False),
    sa.Column('full_name', sa.String(length=255), nullable=False),
    sa.Column('Suggestion', sa.String(length=1000), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_suggestions_Suggestion'), 'suggestions', ['Suggestion'], unique=False)
    op.create_index(op.f('ix_suggestions_email'), 'suggestions', ['email'], unique=False)
    op.create_index(op.f('ix_suggestions_full_name'), 'suggestions', ['full_name'], unique=False)
    op.create_index(op.f('ix_suggestions_id'), 'suggestions', ['id'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_suggestions_id'), table_name='suggestions')
    op.drop_index(op.f('ix_suggestions_full_name'), table_name='suggestions')
    op.drop_index(op.f('ix_suggestions_email'), table_name='suggestions')
    op.drop_index(op.f('ix_suggestions_Suggestion'), table_name='suggestions')
    op.drop_table('suggestions')
    op.drop_index(op.f('ix_advert_id'), table_name='advert')
    op.drop_table('advert')
    # ### end Alembic commands ###
