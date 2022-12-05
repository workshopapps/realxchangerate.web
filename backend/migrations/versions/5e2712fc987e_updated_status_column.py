"""updated status column

Revision ID: 5e2712fc987e
Revises: b46b2f2c8062
Create Date: 2022-12-02 08:55:48.878363

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5e2712fc987e'
down_revision = 'b46b2f2c8062'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('complaints', 'status')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('complaints', sa.Column('status', sa.VARCHAR(length=15), nullable=True))
    # ### end Alembic commands ###