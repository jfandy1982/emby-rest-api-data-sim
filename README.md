# Data Simulator for Emby REST API

This project contains simulating REST API endpoints delivering hard-coded dummy data using the same REST endpoints than a real Emby Server.

The data returned by the endpoints is stored in the included JSON files. With that, it should be possible to implement an own REST API using emby data for evaluations and so on.

## Motivation

As I am working on an Emby Data Check Tool, I was looking for a way to simulate the REST API calls to a real Emby Server. Existing docker images were not an option, because I didn't want to copy existing movie or episode files wasting to much of space. I also want to avoid to keep a complete Emby Server up and running just for the sake of development.
Of course, I have one instance with productive data up and running and I could use it as well. But I'd like to experiment with the new infrastructures a little bit.

Parallel repositories consuming the REST endpoints of this project are:

- [Emby Data Check Backend](https://github.com/jfandy1982/emby-data-check-backend)
- [Emby Data Check Angular UI using Bootstrap](https://github.com/jfandy1982/emby-data-check-ui-angular-bootstrap)
- [Emby Data Check Angular UI using Angular Material Design](https://github.com/jfandy1982/emby-data-check-ui-angular-material)

## Installation

- To be defined

## Usage

- To be defined

## License

Check-out the license in the file [LICENSE.md](LICENSE.md) within this repository.

## Contributing

Thanks for taking the time to read this file until the end. As in every project, there need to be at least some kind of guideline, how to collaborate and contribute. Please check out the [CONTRIBUTING.md](https://github.com/jfandy1982/.github/blob/main/CONTRIBUTING.md) to get more details about possibilities to contribute.
