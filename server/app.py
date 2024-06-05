from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, Beat, User, Transaction
import os

app = Flask(
    __name__,
    static_url_path = '',
    static_folder = '../client/build',
    template_folder = '../client/build'
)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = 0
app.json.compact = 0

# initialize db
migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)

CORS(app)

class UserResource(Resource):
    def get(self, id=None):
        if id:
            user = User.query.get(id)
            return make_response(jsonify(user.to_dict(), 200)) if user else make_response(jsonify({'error': 'User not found'}, 404))
        else:
            users = User.query.all()
            return make_response(jsonify([u.to_dict() for u in users]), 200)
        
        pass
    def post(self):
        data = request.get_json()
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        bio = data.get('bio')

        user = User(
            username=username,
            email=email,
            password=password,
            bio=bio,
        )

        db.session.add(user)
        db.session.commit()

        return make_response(jsonify({'success': 'User created.'}))
        pass
    def patch(self, id):
        user = User.query.get(id)
        if user:
            data = request.get_json()
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')
            bio = data.get('bio')

            updated_user = User(
                username=username,
                email=email,
                password=password,
                bio=bio
            )

            db.session.add(updated_user)
            db.session.commit()
            return make_response(jsonify({'success': 'User updated.'}))
        else:
            return make_response(jsonify({'failed': 'User not found.'}))
        pass
    def delete(self, id):
        user = User.query.get(id)
        if user:
            db.session.delete(user)
            db.session.commit()
            return make_response(jsonify({'success': 'User deleted.'}))
        else:
            return make_response(jsonify({'failed': 'User not found.'}))
        pass

api.add_resource(UserResource, 'users', 'users/<int:id>')  

class BeatResource(Resource):
    def get(self, id=None):
        if id:
            beat = Beat.query.get(id)
            return make_response(jsonify(beat.to_dict(), 200)) if beat else make_response(jsonify({'error': 'Beat not found'}, 404))
        else:
            beats = Beat.query.all()
            return make_response(jsonify([b.to_dict() for b in beats]), 200)
        
        pass
    def post(self):
        pass
    def patch(self, id):
        pass
    def delete(self, id):
        pass

api.add_resource(BeatResource, 'beats', 'beats/<int:id>')  

class TransactionResource(Resource):
    def get(self, id=None):
        if id:
            transaction = Transaction.query.get(id)
            return make_response(jsonify(transaction.to_dict(), 200)) if transaction else make_response(jsonify({'error': 'Transaction not found'}, 404))
        else:
            transactions = Transaction.query.all()
            return make_response(jsonify([t.to_dict() for t in transactions]), 200)
        
        pass
    def post(self):
        pass
    def patch(self, id):
        pass
    def delete(self, id):
        pass

api.add_resource(TransactionResource, 'transactions', 'transactions/<int:id>')    

if __name__ == '__main__':
    app.run(port=5555, debug=1)    