"""initial migration

Revision ID: 5110fb9337e5
Revises: 
Create Date: 2022-11-26 16:22:29.187707

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5110fb9337e5'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('admins',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('password', sa.String(), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_admins_email'), 'admins', ['email'], unique=True)
    op.create_index(op.f('ix_admins_id'), 'admins', ['id'], unique=False)
    op.create_table('currencies',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('country', sa.String(), nullable=False),
    sa.Column('isocode', sa.String(), nullable=False),
    sa.Column('symbol', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('isocode')
    )
    op.create_index(op.f('ix_currencies_country'), 'currencies', ['country'], unique=True)
    op.create_index(op.f('ix_currencies_id'), 'currencies', ['id'], unique=False)
    op.create_table('rates',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('official_buy', sa.Float(), nullable=True),
    sa.Column('official_sell', sa.Float(), nullable=True),
    sa.Column('parallel_buy', sa.Float(), nullable=True),
    sa.Column('parallel_sell', sa.Float(), nullable=True),
    sa.Column('last_updated', sa.DateTime(), nullable=True),
    sa.Column('currency_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['currency_id'], ['currencies.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_rates_id'), 'rates', ['id'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_rates_id'), table_name='rates')
    op.drop_table('rates')
    op.drop_index(op.f('ix_currencies_id'), table_name='currencies')
    op.drop_index(op.f('ix_currencies_country'), table_name='currencies')
    op.drop_table('currencies')
    op.drop_index(op.f('ix_admins_id'), table_name='admins')
    op.drop_index(op.f('ix_admins_email'), table_name='admins')
    op.drop_table('admins')
    # ### end Alembic commands ###