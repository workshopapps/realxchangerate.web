"""create table

Revision ID: 04195729fa4a
Revises: 
Create Date: 2022-12-07 12:16:25.245012

"""
from alembic import op
import sqlalchemy as sa
import sqlalchemy_utils


# revision identifiers, used by Alembic.
revision = '04195729fa4a'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('admins',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sqlalchemy_utils.types.email.EmailType(length=255), nullable=True),
    sa.Column('password', sa.String(length=100), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_admins_email'), 'admins', ['email'], unique=True)
    op.create_index(op.f('ix_admins_id'), 'admins', ['id'], unique=False)
    op.create_table('complaints',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('full_name', sa.String(length=255), nullable=False),
    sa.Column('email', sqlalchemy_utils.types.email.EmailType(length=255), nullable=False),
    sa.Column('complaint', sa.String(length=256), nullable=False),
    sa.Column('timestamp', sa.DateTime(timezone=True), nullable=False),
    sa.Column('status', sa.Enum('resolved', 'unresolved', 'in_review', name='status'), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_complaints_full_name'), 'complaints', ['full_name'], unique=False)
    op.create_index(op.f('ix_complaints_id'), 'complaints', ['id'], unique=False)
    op.create_table('contacts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('email', sqlalchemy_utils.types.email.EmailType(length=255), nullable=False),
    sa.Column('message', sa.Text(), nullable=False),
    sa.Column('last_updated', sa.DateTime(), nullable=True),
    sa.Column('status', sa.Enum('resolved', 'unresolved', 'in_review', name='status'), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_contacts_email'), 'contacts', ['email'], unique=False)
    op.create_index(op.f('ix_contacts_id'), 'contacts', ['id'], unique=False)
    op.create_table('currencies',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('country', sa.String(length=50), nullable=False),
    sa.Column('isocode', sa.String(length=10), nullable=False),
    sa.Column('symbol', sa.String(length=255), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('isocode')
    )
    op.create_index(op.f('ix_currencies_country'), 'currencies', ['country'], unique=True)
    op.create_index(op.f('ix_currencies_id'), 'currencies', ['id'], unique=False)
    op.create_table('faq',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('question', sa.String(length=255), nullable=False),
    sa.Column('answer', sa.String(length=255), nullable=False),
    sa.Column('last_updated', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_faq_id'), 'faq', ['id'], unique=False)
    op.create_index(op.f('ix_faq_question'), 'faq', ['question'], unique=True)
    op.create_table('student',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=255), nullable=True),
    sa.Column('last_name', sa.String(length=255), nullable=True),
    sa.Column('email', sqlalchemy_utils.types.email.EmailType(length=255), nullable=True),
    sa.Column('dob', sa.DateTime(), nullable=True),
    sa.Column('phone_number', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_index(op.f('ix_student_id'), 'student', ['id'], unique=False)
    op.create_table('address',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('student_id', sa.Integer(), nullable=False),
    sa.Column('address', sa.String(length=255), nullable=True),
    sa.Column('city', sa.String(length=255), nullable=True),
    sa.Column('country', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['student_id'], ['student.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_address_id'), 'address', ['id'], unique=False)
    op.create_table('questions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('student_id', sa.Integer(), nullable=False),
    sa.Column('question', sa.String(length=255), nullable=False),
    sa.Column('answer', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['student_id'], ['student.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_questions_id'), 'questions', ['id'], unique=False)
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
    op.create_table('school',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('student_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('name_of_course', sa.String(length=255), nullable=False),
    sa.Column('year_of_entry', sa.String(length=255), nullable=False),
    sa.Column('year_of_completion', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['student_id'], ['student.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_school_id'), 'school', ['id'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_school_id'), table_name='school')
    op.drop_table('school')
    op.drop_index(op.f('ix_rates_id'), table_name='rates')
    op.drop_table('rates')
    op.drop_index(op.f('ix_questions_id'), table_name='questions')
    op.drop_table('questions')
    op.drop_index(op.f('ix_address_id'), table_name='address')
    op.drop_table('address')
    op.drop_index(op.f('ix_student_id'), table_name='student')
    op.drop_table('student')
    op.drop_index(op.f('ix_faq_question'), table_name='faq')
    op.drop_index(op.f('ix_faq_id'), table_name='faq')
    op.drop_table('faq')
    op.drop_index(op.f('ix_currencies_id'), table_name='currencies')
    op.drop_index(op.f('ix_currencies_country'), table_name='currencies')
    op.drop_table('currencies')
    op.drop_index(op.f('ix_contacts_id'), table_name='contacts')
    op.drop_index(op.f('ix_contacts_email'), table_name='contacts')
    op.drop_table('contacts')
    op.drop_index(op.f('ix_complaints_id'), table_name='complaints')
    op.drop_index(op.f('ix_complaints_full_name'), table_name='complaints')
    op.drop_table('complaints')
    op.drop_index(op.f('ix_admins_id'), table_name='admins')
    op.drop_index(op.f('ix_admins_email'), table_name='admins')
    op.drop_table('admins')
    # ### end Alembic commands ###