from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def test_route():
    print('test')
    return 'test'

if __name__ == '__main__':
    app.run(debug=True)
