from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import MetaData

metadata = MetaData(naming_convention={
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    }
)

db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=1)
    username = db.Column(db.String, nullable=0, unique=1)
    email = db.Column(db.String, unique=1, nullable=0)
    password = db.Column(db.String, nullable=0)
    bio = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
        }
    
    def __repr__(self):
        return f'User: {self.username}, email: {self.email}'
    
class Beat(db.Model, SerializerMixin):
    __tablename__ = 'beats'    

    id = db.Column(db.Integer,primary_key=1)
    title = db.Column(db.String, nullable=0)
    genre = db.Column(db.String, nullable=0)
    bpm = db.Column(db.Integer, nullable=0)
    price = db.Column(db.Float, nullable=0)
    license_type = db.Column(db.Integer, nullable=0)
    audio_file_url = db.Column(db.Integer, nullable=0)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    # foreign key referencing user in Users table
    user_id = db.Column(db.Integer, db.ForeignKey('users.id')) 

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
        }
    
    def __repr__(self):
        return f'Beat: {self.title}'
    
class Transaction(db.Model, SerializerMixin):
    __tablename__ = 'transactions'

    id = db.Column(db.Integer, primary_key = 1)    
    # foreign key -> users
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    # foreign key -> beats
    beat_id = db.Column(db.Integer, db.ForeignKey('beats.id'))
    transaction_date = db.Column(db.DateTime, server_default=db.func.now())
    amount = db.Column(db.Float)
    payment_method = db.Column(db.String)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'beat_id': self.beat_id,
            'date': self.transaction_date,
            'amount': self.amount,
            'payment_method': self.payment_method
        }
    
    def __repr__(self):
        return f'Transaction {self.id} for beat {self.beat_id} by user {self.user_id} on {self.transaction_date}. Paid {self.amount} by {self.payment_method}.'