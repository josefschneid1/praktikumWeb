<?php 
class Persistenz {
	var $pfadPerson = "data/person.txt";
	var $pfadBenutzer = "data/benutzer.txt";

	/**
	 * Singleton Muster
	 */
	protected static $instance = null;
 
	public static function getInstance()
	{
		if (null === self::$instance)
		{
			self::$instance = new self;
		}
		return self::$instance;
	}
 
	/**
     * externe Instanzierung und Klonen verbieten
     */
	protected function __construct() {}
	protected function __clone() {}
	
	public function ladeBenutzer() {
		$lines = file($this->pfadBenutzer, FILE_IGNORE_NEW_LINES);		
		
		$benutzer = array();
		$benutzerInfo = explode('=', $lines[0]);
		$passwortInfo = explode('=', $lines[1]);
		$benutzer[$benutzerInfo[0]] = trim($benutzerInfo[1]);
		$benutzer[$passwortInfo[0]] = trim($passwortInfo[1]);

		return $benutzer;
	}

	public function ladePerson() {
		$inhalt = file_get_contents($this->pfadPerson);
		return $inhalt;
	}

	public function speicherePerson($person) {
		file_put_contents($this->pfadPerson, json_encode($person));
	}
}
?>