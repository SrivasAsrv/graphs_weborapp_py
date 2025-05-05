from flask import Blueprint, request, jsonify

# Create a Blueprint for the routes
graph_manager = Blueprint('graph_manager', __name__)

# Sample data storage (in-memory for demonstration purposes)
notes = []
tables = []
flowcharts = []

# Route to get all notes
@graph_manager.route('/notes', methods=['GET'])
def get_notes():
    return jsonify(notes)

# Route to add a new note
@graph_manager.route('/notes', methods=['POST'])
def add_note():
    note = request.json.get('note')
    if note:
        notes.append(note)
        return jsonify({'message': 'Note added successfully!'}), 201
    return jsonify({'error': 'No note provided!'}), 400

# Route to get all tables
@graph_manager.route('/tables', methods=['GET'])
def get_tables():
    return jsonify(tables)

# Route to add a new table
@graph_manager.route('/tables', methods=['POST'])
def add_table():
    table = request.json.get('table')
    if table:
        tables.append(table)
        return jsonify({'message': 'Table added successfully!'}), 201
    return jsonify({'error': 'No table provided!'}), 400

# Route to get all flowcharts
@graph_manager.route('/flowcharts', methods=['GET'])
def get_flowcharts():
    return jsonify(flowcharts)

# Route to add a new flowchart
@graph_manager.route('/flowcharts', methods=['POST'])
def add_flowchart():
    flowchart = request.json.get('flowchart')
    if flowchart:
        flowcharts.append(flowchart)
        return jsonify({'message': 'Flowchart added successfully!'}), 201
    return jsonify({'error': 'No flowchart provided!'}), 400